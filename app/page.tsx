"use client";

import React, { useState } from "react";
import { DashboardShell } from "@/components/DashboardShell";
import { SmartAssistantCard } from "@/components/SmartAssistantCard";
import { AnalysisResultCard } from "@/components/AnalysisResultCard";
import { ServiceDetailsModal } from "@/components/ServiceDetailsModal";
import { analyzeProblem } from "@/lib/mockAI";
import { AnalysisResult } from "@/types/smartserve";
import { AlertCircle } from "lucide-react";

export default function SmartServePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [selectedCategoryModal, setSelectedCategoryModal] = useState<string | null>(null);

  const handleAnalyze = async (
    text: string,
    imageFile: File | null,
    imagePreview: string | null
  ) => {
    setIsLoading(true);
    setApiError(null);

    try {
      const formData = new FormData();
      formData.append("description", text || "");
      if (imageFile) {
        formData.append("image", imageFile);
      }

      const res = await fetch("/api/analyze-service", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || `Server analysis error (${res.status})`);
      }

      const data: AnalysisResult = await res.json();
      setAnalysisResult(data);
    } catch (err: any) {
      console.warn("API request failed, executing fallback analysis:", err?.message || err);
      // Execute intelligent fallback to ensure continuous demo availability
      const fallbackResult = analyzeProblem(text, Boolean(imagePreview));
      setAnalysisResult(fallbackResult);
      setApiError(`Notice: Operating in fallback mode (${err?.message || "Gemini API unavailable"}).`);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        const element = document.getElementById("ai-analysis-result");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }, 100);
    }
  };

  const handleReset = () => {
    setAnalysisResult(null);
    setApiError(null);
  };

  const handleViewService = (categoryName: string) => {
    setSelectedCategoryModal(categoryName);
  };

  return (
    <DashboardShell>
      <div className="space-y-6 pb-12">
        {/* Simple Page Header Heading */}
        <div className="rounded-3xl border border-[#90CAF9] bg-[#E3F2FD]/80 p-6 sm:p-8 shadow-xs">
          <h3 className="text-xl sm:text-1xl font-extrabold tracking-tight text-[#133458]">
            Hello ! Describe your household problem and let SmartServe recommend the right service.
          </h3>
        </div>

        {/* AI Smart Assistant Card */}
        <section id="ai-smart-assistant">
          <SmartAssistantCard
            onAnalyze={handleAnalyze}
            isLoading={isLoading}
            onReset={handleReset}
            hasResult={Boolean(analysisResult)}
          />
        </section>

        {/* API Warning / Error Toast if any */}
        {apiError && (
          <div className="flex items-center gap-2 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs font-semibold text-amber-800">
            <AlertCircle className="h-4 w-4 shrink-0 text-amber-600" />
            <span>{apiError}</span>
          </div>
        )}

        {/* AI Result Card Section */}
        {analysisResult && (
          <section id="ai-analysis-result" className="pt-2">
            <AnalysisResultCard
              result={analysisResult}
              onViewService={handleViewService}
              onReset={handleReset}
            />
          </section>
        )}
      </div>

      {/* Service & Worker Booking Modal */}
      <ServiceDetailsModal
        categoryName={selectedCategoryModal}
        onClose={() => setSelectedCategoryModal(null)}
      />
    </DashboardShell>
  );
}
