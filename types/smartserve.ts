export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  popularServices: string[];
  workerCount: number;
}

export type CategoryType =
  | "Plumbing"
  | "Electrical"
  | "Carpentry"
  | "Painting"
  | "Cleaning"
  | "Appliance Repair"
  | "Gardening"
  | "Driver Services"
  | "Unsupported";

export type UrgencyLevel = "Low" | "Medium" | "High";

export interface AnalysisResult {
  category: CategoryType | string;
  service: string;
  confidence: number;
  explanation: string;
  matchedKeywords: string[];
  visualAnalysis?: string;
  recommendedWorkers?: WorkerProfile[];
  estimatedPriceRange?: string;
  urgency?: UrgencyLevel | string;
  followUpQuestion?: string;
  isHazardous?: boolean;
}


export interface WorkerProfile {
  id: string;
  name: string;
  trade: string;
  rating: number;
  reviewCount: number;
  jobsCompleted: number;
  hourlyRate: number;
  distance: string;
  cooperativeUnit: string;
  badge: string;
  avatar: string;
  availability: string;
}

export interface ServiceDetail {
  category: string;
  serviceName: string;
  description: string;
  estimatedTime: string;
  startingPrice: number;
  workers: WorkerProfile[];
}
