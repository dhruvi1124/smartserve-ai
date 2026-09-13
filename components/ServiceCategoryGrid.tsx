"use client";

import React from "react";
import { ServiceCategoryCard } from "./ServiceCategoryCard";
import { SERVICE_CATEGORIES } from "@/lib/mockAI";

interface ServiceCategoryGridProps {
  onSelectCategory: (categoryName: string) => void;
  selectedCategory?: string | null;
}

export const ServiceCategoryGrid: React.FC<ServiceCategoryGridProps> = ({
  onSelectCategory,
  selectedCategory,
}) => {
  return (
    <section className="mt-10">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-[#091540]">
            Explore Service Categories
          </h2>
          <p className="mt-0.5 text-xs font-medium text-[#091540]/70">
            Select a verified cooperative trade service in Satellite, Ahmedabad
          </p>
        </div>

        <span className="rounded-full border border-[#90CAF9] bg-[#E3F2FD] px-3 py-1 text-xs font-bold text-[#091540]">
          {SERVICE_CATEGORIES.length} Categories
        </span>
      </div>

      {/* Grid Layout */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SERVICE_CATEGORIES.map((category) => (
          <ServiceCategoryCard
            key={category.id}
            category={category}
            onClick={onSelectCategory}
            isSelected={selectedCategory === category.name}
          />
        ))}
      </div>
    </section>
  );
};
