"use client";

import React from "react";
import {
  Home,
  Calendar,
  UserCheck,
  CreditCard,
  User,
  X,
  ShieldCheck,
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onTabChange,
  isMobileOpen,
  onMobileClose,
}) => {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "bookings", label: "My Bookings", icon: Calendar, badge: "2 Active" },
    { id: "find-worker", label: "Find a Worker", icon: UserCheck },
    { id: "payments", label: "Payments & Bills", icon: CreditCard },
    { id: "profile", label: "Profile", icon: User },
  ];

  const sidebarContent = (
    <div className="flex h-full flex-col justify-between p-4">
      <div>
        <div className="mb-6 px-3 pt-2 text-[11px] font-bold uppercase tracking-wider text-[#133458]/60">
          Platform Navigation
        </div>

        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onTabChange(item.id);
                  onMobileClose();
                }}
                className={`group flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#133458] text-white shadow-md shadow-[#133458]/25"
                    : "text-[#133458] hover:bg-[#E3F2FD] hover:text-[#133458]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`h-5 w-5 transition-transform group-hover:scale-110 ${
                      isActive ? "text-white" : "text-[#133458]"
                    }`}
                  />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#E3F2FD] text-[#133458] border border-[#90CAF9]"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

    </div>
  );

  return (
    <>
      {/* Desktop Fixed Sidebar */}
      <aside className="hidden w-64 h-full shrink-0 border-r border-[#90CAF9]/40 bg-white lg:block">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Backdrop & Menu */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-[#133458]/50 backdrop-blur-xs transition-opacity"
            onClick={onMobileClose}
          />
          <div className="fixed inset-y-0 left-0 w-72 bg-white shadow-2xl transition-transform">
            <div className="flex items-center justify-between border-b border-[#90CAF9]/40 p-4">
              <div className="flex items-center gap-2 font-bold text-[#133458]">
                <ShieldCheck className="h-5 w-5 text-[#133458]" />
                KaushalyaSetu
              </div>
              <button
                onClick={onMobileClose}
                className="rounded-lg p-1.5 text-[#133458] hover:bg-[#E3F2FD]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
};
