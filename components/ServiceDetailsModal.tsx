"use client";

import React, { useState } from "react";
import {
  X,
  Star,
  MapPin,
  ShieldCheck,
  Clock,
  CheckCircle2,
  PhoneCall,
  Calendar,
  Sparkles,
} from "lucide-react";
import { getServiceDetails } from "@/lib/mockAI";
import { WorkerProfile } from "@/types/smartserve";

interface ServiceDetailsModalProps {
  categoryName: string | null;
  onClose: () => void;
}

export const ServiceDetailsModal: React.FC<ServiceDetailsModalProps> = ({
  categoryName,
  onClose,
}) => {
  const [bookedWorker, setBookedWorker] = useState<WorkerProfile | null>(null);

  if (!categoryName) return null;

  const details = getServiceDetails(categoryName);

  const handleBook = (worker: WorkerProfile) => {
    setBookedWorker(worker);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Modal Backdrop */}
      <div
        className="fixed inset-0 bg-[#133458]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border-2 border-[#90CAF9] bg-white p-6 sm:p-8 shadow-2xl transition-all">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#90CAF9] bg-[#E3F2FD]/50 text-[#133458] hover:bg-[#E3F2FD] hover:text-[#133458] transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-[#90CAF9]/40 pb-5 pr-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E3F2FD] text-[#133458] border border-[#90CAF9]">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[#E3F2FD] px-2.5 py-0.5 text-[11px] font-bold text-[#133458] border border-[#90CAF9]">
                KaushalyaSetu Cooperative
              </span>
              <span className="text-xs font-semibold text-[#133458]/70">
                Satellite, Ahmedabad
              </span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[#133458]">
              {details.serviceName}
            </h2>
          </div>
        </div>

        {/* Success Booking Banner */}
        {bookedWorker ? (
          <div className="mt-6 rounded-2xl border-2 border-emerald-500 bg-emerald-50 p-6 text-center animate-fade-in">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="mt-3 text-xl font-extrabold text-emerald-900">
              Booking Confirmed with {bookedWorker.name}!
            </h3>
            <p className="mt-1 text-xs font-medium text-emerald-800 max-w-md mx-auto">
              Your service request has been assigned to <span className="font-bold">{bookedWorker.cooperativeUnit}</span>. The technician will reach Satellite within 30 minutes.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-bold text-emerald-900 border border-emerald-300 shadow-2xs">
              <PhoneCall className="h-4 w-4 text-emerald-600" />
              <span>SMS details sent to Prince (+91 9898X XXXXX)</span>
            </div>
            <div className="mt-6 flex justify-center gap-3">
              <button
                onClick={() => setBookedWorker(null)}
                className="rounded-xl border border-emerald-600 px-4 py-2 text-xs font-bold text-emerald-900 hover:bg-emerald-100"
              >
                Back to Workers List
              </button>
              <button
                onClick={onClose}
                className="rounded-xl bg-[#133458] px-5 py-2 text-xs font-bold text-white shadow-md hover:bg-[#0c2440]"
              >
                Done & Close
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Overview Meta */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-2xl border border-[#90CAF9]/60 bg-[#E3F2FD]/40 p-3.5">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#133458]/70">
                  <Clock className="h-3.5 w-3.5 text-[#133458]" />
                  Average Arrival
                </div>
                <div className="mt-0.5 text-sm font-extrabold text-[#133458]">
                  {details.estimatedTime}
                </div>
              </div>

              <div className="rounded-2xl border border-[#90CAF9]/60 bg-[#E3F2FD]/40 p-3.5">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#133458]/70">
                  <Sparkles className="h-3.5 w-3.5 text-[#133458]" />
                  Base Visiting Fee
                </div>
                <div className="mt-0.5 text-sm font-extrabold text-[#133458]">
                  ₹{details.startingPrice} (Fixed Co-op Rate)
                </div>
              </div>

              <div className="rounded-2xl border border-[#90CAF9]/60 bg-[#E3F2FD]/40 p-3.5">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#133458]/70">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#133458]" />
                  Service Warranty
                </div>
                <div className="mt-0.5 text-sm font-extrabold text-[#133458]">
                  30 Days Guarantee
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-xs font-medium text-[#133458]/80 leading-relaxed">
              {details.description}
            </p>

            {/* Available Cooperative Workers List */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#133458] uppercase tracking-wider">
                  Available Verified Workers Near Satellite ({details.workers.length})
                </h3>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  • Govt. Verified Cooperative Members
                </span>
              </div>

              <div className="mt-3 space-y-3">
                {details.workers.map((worker) => (
                  <div
                    key={worker.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-[#90CAF9] bg-white p-4 shadow-xs hover:border-[#133458] transition-all"
                  >
                    <div className="flex items-center gap-3.5">
                      <img
                        src={worker.avatar}
                        alt={worker.name}
                        className="h-14 w-14 rounded-2xl object-cover border border-[#90CAF9]"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-bold text-[#133458]">
                            {worker.name}
                          </h4>
                          <span className="rounded-full bg-[#E3F2FD] px-2 py-0.5 text-[10px] font-bold text-[#133458] border border-[#90CAF9]">
                            {worker.badge}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-[#133458]/70">
                          {worker.trade} • {worker.cooperativeUnit}
                        </p>
                        <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-[#133458]">
                          <span className="flex items-center gap-1 font-bold text-amber-600">
                            <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                            {worker.rating} ({worker.reviewCount})
                          </span>
                          <span>•</span>
                          <span className="font-medium">{worker.jobsCompleted} Jobs</span>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-[#133458]/80 font-medium">
                            <MapPin className="h-3 w-3 text-[#133458]" />
                            {worker.distance}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto border-t sm:border-t-0 border-[#90CAF9]/40 pt-3 sm:pt-0">
                      <div>
                        <span className="text-[10px] text-[#133458]/60 font-semibold uppercase">Hourly Rate</span>
                        <div className="text-base font-extrabold text-[#133458]">
                          ₹{worker.hourlyRate} <span className="text-xs font-normal">/ hr</span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleBook(worker)}
                        className="mt-2 flex items-center gap-1.5 rounded-xl bg-[#133458] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#0c2440] active:scale-98"
                      >
                        <Calendar className="h-3.5 w-3.5" />
                        <span>Book Worker Now</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
};
