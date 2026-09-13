"use client";

import React, { useState } from "react";
import { Sparkles, RefreshCw, AlertCircle } from "lucide-react";
import { ImageUploadBox } from "./ImageUploadBox";

interface SmartAssistantCardProps {
  onAnalyze: (text: string, imageFile: File | null, imagePreview: string | null) => void;
  isLoading: boolean;
  onReset: () => void;
  hasResult: boolean;
}

export const SmartAssistantCard: React.FC<SmartAssistantCardProps> = ({
  onAnalyze,
  isLoading,
  onReset,
  hasResult,
}) => {
  const [inputText, setInputText] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim() && !imageFile) {
      setErrorMsg("Please describe your problem or attach a photo before analyzing.");
      return;
    }
    if (inputText.length > 1000) {
      setErrorMsg("Problem description exceeds 1,000 characters limit.");
      return;
    }
    setErrorMsg(null);
    onAnalyze(inputText, imageFile, imagePreview);
  };

  const handleClearAll = () => {
    setInputText("");
    setImageFile(null);
    setImagePreview(null);
    setErrorMsg(null);
    onReset();
  };

  return (
    <div className="relative rounded-3xl border border-[#90CAF9] bg-white p-6 sm:p-8 shadow-sm transition-all">
      {/* Header Title */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#90CAF9]/40 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E3F2FD] text-[#133458] border border-[#90CAF9]/80 shadow-xs">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight text-[#133458]">
              Find the Right Service with AI
            </h2>
            <p className="text-xs font-medium text-[#133458]/70">
              Smart assistant matches natural language descriptions to verified trades
            </p>
          </div>
        </div>

        {hasResult && (
          <button
            onClick={handleClearAll}
            className="flex items-center gap-1.5 rounded-xl border border-[#90CAF9] bg-[#E3F2FD]/50 px-3 py-1.5 text-xs font-semibold text-[#133458] hover:bg-[#E3F2FD] transition-colors"
          >
            <RefreshCw className="h-3.5 w-3.5 text-[#133458]" />
            <span>Reset Analysis</span>
          </button>
        )}
      </div>

      {/* Main Form */}
      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="block text-xs font-bold text-[#133458]">
              Describe Household Problem
            </label>
            <span className={`text-[11px] font-semibold ${inputText.length > 1000 ? 'text-red-600' : 'text-[#133458]/60'}`}>
              {inputText.length} / 1000
            </span>
          </div>
          <textarea
            rows={4}
            value={inputText}
            maxLength={1000}
            onChange={(e) => {
              setInputText(e.target.value);
              if (errorMsg) setErrorMsg(null);
            }}
            placeholder="Example: My kitchen sink pipe is leaking water under the cabinet..."
            className="w-full rounded-2xl border border-[#90CAF9] bg-[#f8fafc] p-4 text-sm font-medium text-[#133458] placeholder-[#133458]/40 transition-all focus:border-[#133458] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#133458]/15"
          />
        </div>

        {/* Image Attachment Component */}
        <ImageUploadBox
          imagePreview={imagePreview}
          onImageSelect={(file, previewUrl) => {
            setImageFile(file);
            setImagePreview(previewUrl);
            if (errorMsg) setErrorMsg(null);
          }}
          onError={(msg) => setErrorMsg(msg)}
        />

        {/* Error Alert State */}
        {errorMsg && (
          <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-700">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
          {inputText || imagePreview ? (
            <button
              type="button"
              onClick={handleClearAll}
              className="rounded-xl px-4 py-2.5 text-xs font-semibold text-[#133458]/80 hover:text-[#133458] hover:bg-[#E3F2FD] transition-colors"
            >
              Clear Inputs
            </button>
          ) : null}

          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center gap-2.5 rounded-xl bg-[#133458] px-6 py-3 text-sm font-bold text-white shadow-md shadow-[#133458]/30 transition-all hover:bg-[#0c2440] active:scale-98 disabled:opacity-70 focus:outline-none focus:ring-4 focus:ring-[#133458]/30"
          >
            {isLoading ? (
              <>
                <RefreshCw className="h-4 w-4 animate-spin text-white" />
                <span>Analyzing Problem...</span>
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                <span>Analyze Problem</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
