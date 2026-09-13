"use client";

import React from "react";
import { MapPin, ShieldCheck, Search, SlidersHorizontal } from "lucide-react";

interface PageHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#90CAF9] bg-gradient-to-b from-[#E3F2FD]/80 to-white p-6 sm:p-8 shadow-xs">

      {/* Top Meta Pills */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Location Pill */}
        <div className="flex items-center gap-2 rounded-full border border-[#90CAF9] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#091540] shadow-xs">
          <MapPin className="h-3.5 w-3.5 text-[#2196F3]" />
          <span>Satellite, Ahmedabad</span>
        </div>

        {/* Verification Pill */}
        <div className="flex items-center gap-2 rounded-full border border-[#90CAF9] bg-[#E3F2FD] px-3.5 py-1.5 text-xs font-semibold text-[#091540] border-dashed">
          <ShieldCheck className="h-4 w-4 text-[#2196F3]" />
          <span>KaushalyaSetu Verified Worker Cooperative</span>
        </div>
      </div>

      {/* Greeting Title */}
      <div className="mt-6">
        <h3 className="text-2xl font-extrabold tracking-tight text-[#091540] sm:text-3xl">
          Hello! Describe your household problem and let SmartServe recommend the right service.
        </h3>
      </div>

      {/* Search Input Bar */}
      <div className="mt-6 max-w-3xl">
        <div className="relative flex items-center">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-[#2196F3]">
            <Search className="h-5 w-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search for a service (e.g. Electrician, Pipe Leakage, Deep Cleaning)..."
            className="w-full rounded-2xl border border-[#90CAF9] bg-white py-3.5 pl-11 pr-12 text-sm font-medium text-[#091540] placeholder-[#091540]/40 shadow-xs transition-all focus:border-[#2196F3] focus:outline-none focus:ring-4 focus:ring-[#2196F3]/15"
          />
          <button
            className="absolute right-2 flex h-9 w-9 items-center justify-center rounded-xl text-[#091540] hover:bg-[#E3F2FD] hover:text-[#2196F3] transition-colors"
            title="Filter Options"
          >
            <SlidersHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
