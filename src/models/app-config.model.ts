/**
 * Application Configuration Model
 * This represents the single JSON object stored in localStorage
 */
export interface AppConfig {
  hotel: {
    info: any;
    settings: any;
  };
  roomTypes: any[];
  rooms: any[];
  ratePlans: any[];
  taxes: any[];
  policies: {
    cancellation: any[];
    booking: any[];
    payment: any[];
  };
  amenities: any[];
  users: any[];
  lastModified: string;
  version: string;
}

export interface AppState {
  isOnline: boolean;
  lastSynced: string;
  hasUnsavedChanges: boolean;
  currentModule: string;
}
