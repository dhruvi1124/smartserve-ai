import { ServiceCategory, AnalysisResult, WorkerProfile, ServiceDetail } from "@/types/smartserve";

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "plumbing",
    name: "Plumbing",
    description: "Tap repair, pipe leaks & drainage",
    iconName: "Wrench",
    popularServices: ["Pipe Leakage", "Tap Repair", "Drainage Unclogging", "Water Heater Installation"],
    workerCount: 42,
  },
  {
    id: "electrical",
    name: "Electrical",
    description: "Wiring, switchboards & MCB repair",
    iconName: "Zap",
    popularServices: ["Electrical Repair", "Fan Installation", "Short Circuit Repair", "Switchboard Fixing"],
    workerCount: 38,
  },
  {
    id: "carpentry",
    name: "Carpentry",
    description: "Furniture assembly & door fixes",
    iconName: "Hammer",
    popularServices: ["Door Repair", "Furniture Assembly", "Lock Fixing", "Custom Cabinet Work"],
    workerCount: 29,
  },
  {
    id: "painting",
    name: "Painting",
    description: "House painting & wall touchups",
    iconName: "Paintbrush",
    popularServices: ["Wall Painting", "Damp Touchup", "Waterproofing", "Exterior Coating"],
    workerCount: 31,
  },
  {
    id: "cleaning",
    name: "Cleaning",
    description: "Deep house & kitchen sanitization",
    iconName: "Sparkles",
    popularServices: ["Deep Cleaning", "Kitchen Sanitization", "Bathroom Scrubbing", "Sofa & Carpet Wash"],
    workerCount: 54,
  },
  {
    id: "appliance",
    name: "Appliance Repair",
    description: "AC, Fridge & Washing Machine",
    iconName: "Tv",
    popularServices: ["Appliance Repair", "AC Servicing & Gas Refill", "Refrigerator Repair", "Washing Machine Motor"],
    workerCount: 26,
  },
  {
    id: "gardening",
    name: "Gardening",
    description: "Lawn care & plant maintenance",
    iconName: "Trees",
    popularServices: ["Lawn Care", "Plant Pruning", "Garden Setup", "Pesticide Spray"],
    workerCount: 19,
  },
  {
    id: "driver",
    name: "Driver Services",
    description: "Personal & outstation drivers",
    iconName: "Car",
    popularServices: ["City Driver", "Outstation Trip", "Luxury Car Driver", "Monthly Personal Driver"],
    workerCount: 33,
  },
];

export const UNSUPPORTED_RESPONSE: AnalysisResult = {
  category: "Unsupported",
  service: "No household service detected",
  confidence: 0,
  explanation: "Please describe a household problem, such as a leaking pipe, broken fan, damaged door, or AC not cooling.",
  urgency: "Low",
  followUpQuestion: "What household problem do you need help with?",
  matchedKeywords: [],
};


export const MOCK_WORKERS: Record<string, WorkerProfile[]> = {
  Plumbing: [
    {
      id: "w1",
      name: "Ramesh Prajapati",
      trade: "Master Plumber",
      rating: 4.9,
      reviewCount: 128,
      jobsCompleted: 340,
      hourlyRate: 350,
      distance: "1.2 km away (Satellite)",
      cooperativeUnit: "Ahmedabad West Trades Co-op #14",
      badge: "KaushalyaSetu Verified Gold",
      avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=150&auto=format&fit=crop&q=80",
      availability: "Available Today in 30 mins",
    },
    {
      id: "w2",
      name: "Suresh Solanki",
      trade: "Pipe Specialist",
      rating: 4.8,
      reviewCount: 94,
      jobsCompleted: 215,
      hourlyRate: 300,
      distance: "2.5 km away (Bodakdev)",
      cooperativeUnit: "Ahmedabad West Trades Co-op #14",
      badge: "Cooperative Certified",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      availability: "Available from 2:00 PM",
    },
  ],
  Electrical: [
    {
      id: "w3",
      name: "Jignesh Patel",
      trade: "Senior Electrician",
      rating: 4.95,
      reviewCount: 176,
      jobsCompleted: 420,
      hourlyRate: 400,
      distance: "0.8 km away (Satellite)",
      cooperativeUnit: "Vejalpur-Satellite Skill Guild",
      badge: "KaushalyaSetu Master Expert",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      availability: "Available Immediately",
    },
    {
      id: "w4",
      name: "Dharmesh Shah",
      trade: "Wiring & Appliance Tech",
      rating: 4.7,
      reviewCount: 82,
      jobsCompleted: 190,
      hourlyRate: 320,
      distance: "3.1 km away (Ambawadi)",
      cooperativeUnit: "Vejalpur-Satellite Skill Guild",
      badge: "Verified Member",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
      availability: "Available Today",
    },
  ],
  Carpentry: [
    {
      id: "w5",
      name: "Mahesh Panchal",
      trade: "Custom Artisan Carpenter",
      rating: 4.88,
      reviewCount: 110,
      jobsCompleted: 280,
      hourlyRate: 450,
      distance: "1.5 km away (Jodhpur)",
      cooperativeUnit: "Viswakarma Wooden Craft Union",
      badge: "Senior Cooperative Artisan",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
      availability: "Available Tomorrow 10:00 AM",
    },
  ],
  Painting: [
    {
      id: "w6",
      name: "Bhavesh Makwana",
      trade: "Interior & Moisture Paint Specialist",
      rating: 4.85,
      reviewCount: 95,
      jobsCompleted: 230,
      hourlyRate: 380,
      distance: "2.0 km away (Prahladnagar)",
      cooperativeUnit: "Gujarat Urban Painters Union",
      badge: "KaushalyaSetu Verified",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
      availability: "Available Today",
    },
  ],
  Cleaning: [
    {
      id: "w7",
      name: "Sunita & Team (Sahyog Self-Help)",
      trade: "Sanitization Lead",
      rating: 4.92,
      reviewCount: 210,
      jobsCompleted: 510,
      hourlyRate: 500,
      distance: "1.0 km away (Satellite)",
      cooperativeUnit: "Women Empowerment Sanitation Co-op",
      badge: "Top Rated Cooperative Group",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      availability: "Available Today 1:00 PM",
    },
  ],
  "Appliance Repair": [
    {
      id: "w8",
      name: "Vijay Rathod",
      trade: "HVAC & Appliance Technician",
      rating: 4.9,
      reviewCount: 145,
      jobsCompleted: 390,
      hourlyRate: 450,
      distance: "1.8 km away (Bodakdev)",
      cooperativeUnit: "Ahmedabad Cooling & Tech Guild",
      badge: "KaushalyaSetu Certified Tech",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      availability: "Available in 1 hour",
    },
  ],
};

export function analyzeProblem(promptText: string, hasImage: boolean = false): AnalysisResult {
  const query = promptText.toLowerCase().trim();

  // 1. Empty or whitespace check
  if (!query && !hasImage) {
    return UNSUPPORTED_RESPONSE;
  }

  // 2. Length check (>1000 characters)
  if (query.length > 1000) {
    return {
      category: "Unsupported",
      service: "No household service detected",
      confidence: 0,
      explanation: "Your description exceeds the 1,000 character limit. Please shorten your problem description.",
      urgency: "Low",
      followUpQuestion: "Can you summarize your household problem in a few sentences?",
      matchedKeywords: [],
    };
  }

  // 3. Greetings check
  const GREETINGS = [
    "hello", "hi", "hey", "good morning", "good afternoon", "good evening",
    "how are you", "how r u", "namaste", "hola", "sup", "yo", "hi there", "hello there"
  ];
  if (GREETINGS.includes(query) || (GREETINGS.some(g => query === g) && !hasImage)) {
    return UNSUPPORTED_RESPONSE;
  }

  // 4. Random characters / spam / off-topic check
  const OFF_TOPIC_PATTERNS = [
    "joke", "tell me", "who is", "president", "capital of", "code", "poem",
    "sing", "weather", "math", "calculator", "recipe", "asdf", "qwerty", "12345"
  ];
  if (OFF_TOPIC_PATTERNS.some(pattern => query.includes(pattern)) && !hasImage) {
    return UNSUPPORTED_RESPONSE;
  }

  // Gibberish / non-word check (e.g. "asdfgh123")
  if (/^[a-z0-9]{6,}$/i.test(query) && !/[aeiouy]{2,}/i.test(query) && !hasImage) {
    return UNSUPPORTED_RESPONSE;
  }

  // 5. Safety Emergency Check (Gas leak, fire, live wires, flooding)
  if (
    query.includes("smoke") ||
    query.includes("gas smell") ||
    query.includes("gas leak") ||
    query.includes("fire") ||
    query.includes("live wire") ||
    query.includes("electric shock hazard") ||
    query.includes("flooding")
  ) {
    return {
      category: query.includes("gas") || query.includes("fire") ? "Unsupported" : "Electrical",
      service: "Emergency Hazard Warning",
      confidence: 99,
      explanation: "CRITICAL SAFETY ALERT: Fire, gas leak, or live wire dangers detected! Please evacuate immediately if needed and call local emergency services (101/108) before attempting any repairs.",
      urgency: "High",
      followUpQuestion: "Are you and your household in a safe location?",
      isHazardous: true,
      matchedKeywords: ["hazard", "emergency"],
    };
  }

  // 6. Plumbing Keywords
  if (
    query.includes("pipe") ||
    query.includes("leak") ||
    query.includes("tap") ||
    query.includes("sink") ||
    query.includes("drain") ||
    query.includes("flush") ||
    query.includes("water flow") ||
    query.includes("sewage")
  ) {
    let service = "Pipe Leakage";
    if (query.includes("tap")) service = "Tap Repair & Replacement";
    if (query.includes("drain") || query.includes("clog")) service = "Drainage Unclogging";

    return {
      category: "Plumbing",
      service: service,
      confidence: hasImage ? 98 : 95,
      explanation:
        "The problem description refers to water leakage or pipe fittings. Our plumbing cooperative experts are trained for pressure seal repairs and pipe replacements.",
      matchedKeywords: ["pipe", "leaking", "sink", "water"],
      urgency: "Medium",
      followUpQuestion: "Is the water supply to the pipe currently turned off?",
      visualAnalysis: hasImage
        ? "Visual scan confirms moisture accumulation near joint fixture."
        : undefined,
      estimatedPriceRange: "₹250 - ₹600 (Govt. Co-op standard rates)",
      recommendedWorkers: MOCK_WORKERS["Plumbing"],
    };
  }

  // 7. Electrical Keywords
  if (
    query.includes("fan") ||
    query.includes("switch") ||
    query.includes("spark") ||
    query.includes("shock") ||
    query.includes("circuit") ||
    query.includes("mcb") ||
    query.includes("wire") ||
    query.includes("light") ||
    query.includes("power")
  ) {
    let service = "Electrical Repair";
    if (query.includes("fan")) service = "Ceiling Fan Repair & Regulator";
    if (query.includes("switch")) service = "Switchboard & Wiring Fixing";

    return {
      category: "Electrical",
      service: service,
      confidence: hasImage ? 96 : 92,
      explanation:
        "The problem involves electrical circuits or fixture malfunctions. A licensed KaushalyaSetu electrician will ensure safety standards and line inspection.",
      matchedKeywords: ["fan", "electrical", "switch", "wiring"],
      urgency: query.includes("spark") || query.includes("shock") ? "High" : "Medium",
      followUpQuestion: "Has the main circuit breaker (MCB) tripped?",
      visualAnalysis: hasImage
        ? "Image analysis detects terminal wire exposure and power unit structure."
        : undefined,
      estimatedPriceRange: "₹200 - ₹500",
      recommendedWorkers: MOCK_WORKERS["Electrical"],
    };
  }

  // 8. Carpentry Keywords
  if (
    query.includes("door") ||
    query.includes("wood") ||
    query.includes("furniture") ||
    query.includes("lock") ||
    query.includes("hinge") ||
    query.includes("table") ||
    query.includes("cupboard") ||
    query.includes("chair")
  ) {
    let service = "Door Repair";
    if (query.includes("furniture") || query.includes("table")) service = "Furniture Assembly & Repair";
    if (query.includes("lock")) service = "Door Lock Installation";

    return {
      category: "Carpentry",
      service: service,
      confidence: 94,
      explanation:
        "The issue points to wooden structures, door fittings, or hardware alignment requiring skilled carpentry work.",
      matchedKeywords: ["door", "furniture", "hinge", "wood"],
      urgency: query.includes("lock") ? "High" : "Low",
      followUpQuestion: "Are the hinges or frame damaged?",
      visualAnalysis: hasImage
        ? "Visual inspection highlights structural frame misalignments."
        : undefined,
      estimatedPriceRange: "₹300 - ₹750",
      recommendedWorkers: MOCK_WORKERS["Carpentry"],
    };
  }

  // 9. Painting Keywords
  if (
    query.includes("paint") ||
    query.includes("wall") ||
    query.includes("damp") ||
    query.includes("color") ||
    query.includes("peeling") ||
    query.includes("touchup")
  ) {
    return {
      category: "Painting",
      service: "Wall Painting & Patching",
      confidence: 93,
      explanation:
        "Surface damage, flaking paint, or wall touchup requirements detected. Cooperative painters handle priming and waterproof coating.",
      matchedKeywords: ["paint", "wall", "dampness", "patching"],
      urgency: "Low",
      followUpQuestion: "Is there active moisture seepage behind the wall?",
      visualAnalysis: hasImage
        ? "Image scan shows surface coat separation due to humidity."
        : undefined,
      estimatedPriceRange: "₹500 - ₹1,500",
      recommendedWorkers: MOCK_WORKERS["Painting"],
    };
  }

  // 10. Cleaning Keywords
  if (
    query.includes("clean") ||
    query.includes("dirty") ||
    query.includes("kitchen") ||
    query.includes("bathroom") ||
    query.includes("dust") ||
    query.includes("wash") ||
    query.includes("sanitiz")
  ) {
    let service = "Deep Cleaning";
    if (query.includes("kitchen")) service = "Kitchen Deep Sanitization";
    if (query.includes("bathroom")) service = "Bathroom Scrubbing & Sanitization";

    return {
      category: "Cleaning",
      service: service,
      confidence: 96,
      explanation:
        "Sanitization and deep grease/dust removal needed. Performed by certified women self-help cooperative sanitation groups.",
      matchedKeywords: ["cleaning", "kitchen", "sanitizing"],
      urgency: "Low",
      followUpQuestion: "Which rooms require deep cleaning?",
      visualAnalysis: hasImage
        ? "Visual feedback recognizes surface grime requiring industrial eco-cleaners."
        : undefined,
      estimatedPriceRange: "₹400 - ₹1,200",
      recommendedWorkers: MOCK_WORKERS["Cleaning"],
    };
  }

  // 11. Appliance Repair Keywords
  if (
    query.includes("ac") ||
    query.includes("air conditioner") ||
    query.includes("cool") ||
    query.includes("fridge") ||
    query.includes("refrigerator") ||
    query.includes("washing machine") ||
    query.includes("appliance") ||
    query.includes("microwave")
  ) {
    let service = "Appliance Repair";
    if (query.includes("ac") || query.includes("cool")) service = "AC Servicing & Gas Topup";
    if (query.includes("fridge") || query.includes("refrigerator")) service = "Refrigerator Repair";

    return {
      category: "Appliance Repair",
      service: service,
      confidence: 97,
      explanation:
        "The problem specifies household electrical appliances (AC, refrigerator, washer). Skilled technicians provide diagnostic testing and OEM parts replacement.",
      matchedKeywords: ["ac", "appliance", "cooling", "servicing"],
      urgency: "Medium",
      followUpQuestion: "Is the appliance displaying any error codes on screen?",
      visualAnalysis: hasImage
        ? "Uploaded image verifies appliance model plate and filter condition."
        : undefined,
      estimatedPriceRange: "₹350 - ₹1,000",
      recommendedWorkers: MOCK_WORKERS["Appliance Repair"],
    };
  }

  // 12. If no household keyword matched and no image provided
  if (!hasImage) {
    return UNSUPPORTED_RESPONSE;
  }

  // Default fallback for image-only upload
  return {
    category: "Plumbing",
    service: "Pipe Leakage / Surface Fitting",
    confidence: 88,
    explanation: "AI visual analysis suggests a household pipe fixture issue. Recommended specialist assigned.",
    matchedKeywords: ["household", "inspection"],
    urgency: "Medium",
    followUpQuestion: "Can you provide a brief description of what is happening?",
    visualAnalysis: "Image processed: Surface anomaly detected near home utility connection.",
    estimatedPriceRange: "₹250 - ₹500",
    recommendedWorkers: MOCK_WORKERS["Plumbing"],
  };
}

export function getServiceDetails(categoryName: string): ServiceDetail {
  const workers = MOCK_WORKERS[categoryName] || MOCK_WORKERS["Plumbing"];
  return {
    category: categoryName,
    serviceName: `${categoryName} Diagnostic & Repair`,
    description: `Official KaushalyaSetu cooperative trade service for ${categoryName.toLowerCase()} in Satellite, Ahmedabad. Transparent fixed pricing, background-verified technicians, and government cooperative quality assurance.`,
    estimatedTime: "30 - 45 Mins Arrival",
    startingPrice: 249,
    workers: workers,
  };
}
