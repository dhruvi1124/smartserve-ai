"use client";

import React from "react";
import { Bell, Menu, ShieldCheck, Sparkles } from "lucide-react";

interface TopNavbarProps {
  onMobileMenuToggle: () => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({ onMobileMenuToggle }) => {
  return (
    <header className="shrink-0 w-full border-b border-[#90CAF9]/40 bg-white/95 backdrop-blur-md transition-all">
      <div className="flex h-16 w-full items-center justify-between px-3 sm:px-5 lg:px-6">
        
        {/* Left Side: Mobile Menu Button & Brand Logo */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onMobileMenuToggle}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#90CAF9]/50 text-[#133458] hover:bg-[#E3F2FD] focus:outline-none focus:ring-2 focus:ring-[#133458] lg:hidden"
            aria-label="Toggle Navigation Menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#133458] text-white shadow-sm shadow-[#133458]/30">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-bold tracking-tight text-[#133458]">
                  KaushalyaSetu
                </span>
                <span className="hidden rounded bg-[#E3F2FD] px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-[#133458] sm:inline-block border border-[#90CAF9]/60">
                  SMARTSERVE
                </span>
              </div>
              <p className="hidden text-[11px] font-medium text-[#133458]/70 sm:block">
                Community Owned Digital Marketplace
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Notifications & User Profile (Prince Patel in Top Right Corner) */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* AI Badge Pill */}
          <div className="hidden items-center gap-1.5 rounded-full border border-[#90CAF9] bg-[#E3F2FD]/80 px-3 py-1 text-xs font-semibold text-[#133458] md:flex">
            <Sparkles className="h-3.5 w-3.5 text-[#133458] animate-pulse" />
            <span>AI Assistant Active</span>
          </div>

          {/* Notification Icon */}
          <button
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#90CAF9]/50 text-[#133458] transition-colors hover:bg-[#E3F2FD] focus:outline-none focus:ring-2 focus:ring-[#133458]"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute top-1 right-1 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#133458] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#133458]"></span>
            </span>
          </button>

          {/* User Profile Section (Prince Patel) */}
          <div className="flex items-center gap-2.5 rounded-full border border-[#90CAF9]/60 bg-[#E3F2FD]/40 p-1 pr-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#133458] text-xs font-bold text-white ring-2 ring-[#90CAF9]">
              PR
            </div>
            <div className="hidden text-left sm:block">
              <div className="text-xs font-bold text-[#133458]">Prince Patel</div>
              <div className="text-[10px] font-medium text-[#133458]/70">Household Customer</div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};
