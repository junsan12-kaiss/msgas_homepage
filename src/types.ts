export type Language = 'ko' | 'en';

export interface GasProduct {
  id: string;
  category: 'industrial' | 'fuel' | 'specialty' | 'medical' | 'standard';
  categoryLabel: string;
  nameKo: string;
  nameEn: string;
  formula: string;
  purity: string;
  grade: string;
  deliveryType: string[];
  descriptionKo: string;
  descriptionEn: string;
  applications: string[];
  casNo: string;
  unNo: string;
  cylinderSizes: string[];
  imageUrl: string;
  featured?: boolean;
}

export interface LogisticsHub {
  id: string;
  nameKo: string;
  nameEn: string;
  type: 'headquarter' | 'hub' | 'branch';
  address: string;
  tankCapacity: string;
  trucks: number;
  phone: string;
  status: 'normal' | 'busy' | 'active';
  manager: string;
  coordinates: { x: number; y: number }; // percentage on map
}

export interface NewsItem {
  id: string;
  tag: string;
  tagType: 'award' | 'tender' | 'notice' | 'safety';
  category: string;
  titleKo: string;
  titleEn: string;
  date: string;
  summaryKo: string;
  contentKo: string[];
  author: string;
  isFeatured?: boolean;
}

export interface TelemetryState {
  timestamp: string;
  fleetActive: number;
  totalFleet: number;
  supplyReliability: number;
  totalStorageM3: number;
  noksanTankLevel: number;
  ulsanTankLevel: number;
  chungnamTankLevel: number;
  pohangTankLevel: number;
  activeDispatches: number;
  systemStatus: string;
}
