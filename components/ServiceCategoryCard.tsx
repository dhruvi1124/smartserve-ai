"use client";

import React from "react";
import {
  Wrench,
  Zap,
  Hammer,
  Paintbrush,
  Sparkles,
  Tv,
  Trees,
  Car,
  ChevronRight,
  LucideIcon,
} from "lucide-react";
import { ServiceCategory } from "@/types/smartserve";

const ICON_MAP: Record<string, LucideIcon> = {
  Wrench,
  Zap,
  Hammer,
  Paintbrush,
  Sparkles,
  Tv,
  Trees,
  Car,
};

interface ServiceCategoryCardProps {
  category: ServiceCategory;
  onClick: (categoryName: string) => void;
  isSelected?: boolean;
}

export const ServiceCategoryCard: React.FC<ServiceCategoryCardProps> = ({
  category,
  onClick,
  isSelected = false,
}) => {
  const IconComponent = ICON_MAP[category.iconName] || Wrench;

  return (
    <button
      onClick={() => onClick(category.name)}
      className={`group relative flex flex-col justify-between text-left rounded-3xl p-5 border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2196F3] ${
        isSelected
          ? "border-[#2196F3] bg-[#E3F2FD] shadow-md ring-2 ring-[#2196F3]/30"
          : "border-[#90CAF9]/60 bg-white hover:border-[#2196F3] hover:bg-[#E3F2FD]/30 hover:shadow-md hover:-translate-y-0.5"
      }`}
    >
      <div>
        {/* Icon Container */}
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E3F2FD] text-[#2196F3] border border-[#90CAF9]/60 group-hover:bg-[#2196F3] group-hover:text-white transition-colors">
            <IconComponent className="h-6 w-6" />
          </div>

          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E3F2FD]/50 text-[#091540] group-hover:bg-[#2196F3] group-hover:text-white transition-colors">
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="mt-4 text-base font-bold tracking-tight text-[#091540] group-hover:text-[#2196F3] transition-colors">
          {category.name}
        </h3>
        <p className="mt-1 text-xs text-[#091540]/70 line-clamp-2 leading-relaxed">
          {category.description}
        </p>
      </div>

      {/* Footer Meta info */}
      <div className="mt-4 flex items-center justify-between border-t border-[#90CAF9]/40 pt-3 text-[11px] font-semibold text-[#091540]/60">
        <span>{category.workerCount} Verified Workers</span>
        <span className="text-[#2196F3]">Explore</span>
      </div>
    </button>
  );
};
