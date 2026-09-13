"use client";

import React, { useState } from "react";
import { TopNavbar } from "./TopNavbar";
import { Sidebar } from "./Sidebar";

interface DashboardShellProps {
  children: React.ReactNode;
}

export const DashboardShell: React.FC<DashboardShellProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState("home");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[#f8fafc] text-[#133458]">
      {/* Full-width Top Navbar: Logo flush to top-left, Prince Patel flush to top-right */}
      <TopNavbar onMobileMenuToggle={() => setIsMobileOpen(true)} />

      {/* Body Area */}
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Left Navigation Sidebar */}
        <Sidebar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          isMobileOpen={isMobileOpen}
          onMobileClose={() => setIsMobileOpen(false)}
        />

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-6xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
