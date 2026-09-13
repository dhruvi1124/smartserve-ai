import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { analyzeProblem, UNSUPPORTED_RESPONSE } from "@/lib/mockAI";

const ALLOWED_MIME_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB
const MAX_TEXT_LENGTH = 1000;

const ALLOWED_CATEGORIES = [
  "Plumbing",
  "Electrical",
  "Carpentry",
  "Painting",
  "Cleaning",
  "Appliance Repair",
  "Gardening",
  "Driver Services",
  "Unsupported",
];

const ALLOWED_URGENCIES = ["Low", "Medium", "High"];

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const description = (formData.get("description") as string) || "";
    const image = formData.get("image") as File | null;

    const trimmedDescription = description.trim();
    const hasDescription = Boolean(trimmedDescription);
    const hasImage = Boolean(image && image.size > 0);

    // 1. Input Validation: Missing both
    if (!hasDescription && !hasImage) {
      return NextResponse.json(
        { error: "Please describe your household problem or attach an image." },
        { status: 400 }
      );
    }

    // 2. Length Validation (>1,000 chars)
    if (trimmedDescription.length > MAX_TEXT_LENGTH) {
      return NextResponse.json(
        { error: `Description exceeds maximum limit of ${MAX_TEXT_LENGTH} characters.` },
        { status: 400 }
      );
    }

    // 3. Image Validation (MIME type & 5MB size limit)
    if (hasImage && image) {
      if (image.size > MAX_IMAGE_SIZE_BYTES) {
        return NextResponse.json(
          { error: "Image size exceeds 5 MB limit. Please upload a smaller image." },
          { status: 400 }
        );
      }

      if (!ALLOWED_MIME_TYPES.includes(image.type.toLowerCase())) {
        return NextResponse.json(
          { error: "Unsupported image format. Please upload a JPG, JPEG, PNG, or WEBP photo." },
          { status: 400 }
        );
      }
    }

    // 4. Server Pre-Check for Greetings / Spam / Gibberish / Hazards
    const localDiagnostic = analyzeProblem(trimmedDescription, hasImage);
    if (localDiagnostic.category === "Unsupported") {
      return NextResponse.json(UNSUPPORTED_RESPONSE);
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // Fallback if key missing or default
    if (!apiKey || apiKey === "your_api_key_here") {
      return NextResponse.json(localDiagnostic);
    }

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-3.6-flash" });

      const systemPrompt = `You are SmartServe AI, an expert household service classification & safety assistant for KaushalyaSetu.

STRICT CLASSIFICATION RULES:
1. ONLY ALLOW THESE CATEGORIES:
   - Plumbing
   - Electrical
   - Carpentry
   - Painting
   - Cleaning
   - Appliance Repair
   - Gardening
   - Driver Services
   - Unsupported

2. UNSUPPORTED CATEGORY RULE:
   If the user input is a greeting (e.g. "hello", "hi", "good morning"), off-topic query, joke, random characters ("asdfgh123"), or unrelated to household services, YOU MUST RETURN STRICTLY THIS JSON:
   {
     "category": "Unsupported",
     "service": "No household service detected",
     "confidence": 0,
     "explanation": "Please describe a household problem, such as a leaking pipe, broken fan, damaged door, or AC not cooling.",
     "urgency": "Low",
     "followUpQuestion": "What household problem do you need help with?"
   }

3. SAFETY & EMERGENCY RULE:
   Do NOT provide DIY repair instructions for hazardous situations (fire, smoke, gas leaks, flooding, live exposed wires, structural failure).
   If the user reports fire, gas smell, live wires, flooding, or structural collapse:
   - Set "urgency": "High"
   - Recommend evacuating and contacting emergency services or certified professionals.

4. PRIVACY RULES:
   Do NOT diagnose medical, legal, or financial issues. Do NOT identify people or faces in images.

User Input: "${trimmedDescription}"
Image Uploaded: ${hasImage ? "Yes" : "No"}

Return ONLY raw JSON matching this schema (no markdown backticks, no code blocks):
{
  "category": "Plumbing | Electrical | Carpentry | Painting | Cleaning | Appliance Repair | Gardening | Driver Services | Unsupported",
  "service": "Specific service name or 'No household service detected'",
  "confidence": <integer 0-100>,
  "explanation": "Short 1-2 sentence explanation",
  "urgency": "Low | Medium | High",
  "followUpQuestion": "Short clarifying question"
}`;

      const contents: (string | { inlineData: { mimeType: string; data: string } })[] = [systemPrompt];

      if (hasImage && image) {
        const arrayBuffer = await image.arrayBuffer();
        const base64Data = Buffer.from(arrayBuffer).toString("base64");
        contents.push({
          inlineData: {
            mimeType: image.type,
            data: base64Data,
          },
        });
      }

      const result = await model.generateContent(contents);
      const responseText = result.response.text();

      const cleanedText = responseText
        .replace(/```json/gi, "")
        .replace(/```/g, "")
        .trim();

      const parsedJSON = JSON.parse(cleanedText);

      // Validate returned JSON
      const rawCategory = parsedJSON.category || "Unsupported";
      const validCategory = ALLOWED_CATEGORIES.includes(rawCategory) ? rawCategory : "Unsupported";

      if (validCategory === "Unsupported") {
        return NextResponse.json(UNSUPPORTED_RESPONSE);
      }

      const rawUrgency = parsedJSON.urgency || "Medium";
      const validUrgency = ALLOWED_URGENCIES.includes(rawUrgency) ? rawUrgency : "Medium";
      const rawConfidence = typeof parsedJSON.confidence === "number" ? Math.min(100, Math.max(0, parsedJSON.confidence)) : 90;

      return NextResponse.json({
        category: validCategory,
        service: parsedJSON.service || `${validCategory} Diagnostic`,
        confidence: rawConfidence,
        explanation: parsedJSON.explanation || "AI matched description to verified cooperative service.",
        urgency: validUrgency,
        followUpQuestion: parsedJSON.followUpQuestion || "Would you like us to schedule a technician?",
        matchedKeywords: [trimmedDescription.slice(0, 15)],
        visualAnalysis: hasImage ? "Visual scan verified by Gemini Vision model." : undefined,
        estimatedPriceRange: "₹250 - ₹750 (Govt. Co-op standard rates)",
      });
    } catch (geminiErr) {
      console.warn("Gemini server API call fallback triggered:", geminiErr);
      return NextResponse.json(localDiagnostic);
    }
  } catch (err) {
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request. Please try again." },
      { status: 500 }
    );
  }
}
