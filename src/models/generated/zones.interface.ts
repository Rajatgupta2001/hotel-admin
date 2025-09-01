/**
 * Zones Model Interfaces
 * Database table: zones
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IZones {
  zoneId?: number;  // Primary key - auto-generated
  zoneCountryId: number;  // Required
  zoneCode: string;  // Required
  zoneName: string;  // Required
  timeZone?: string;
  status: string;  // Required
  value1?: string;
}

// Create interface - for new entity creation
export interface ICreateZones {
  zoneCountryId: number;
  zoneCode: string;
  zoneName: string;
  timeZone?: string;
  status: string;
  value1?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateZones {
  zoneCountryId?: number;
  zoneCode?: string;
  zoneName?: string;
  timeZone?: string;
  status?: string;
  value1?: string;
}
