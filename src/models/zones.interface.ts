/**
 * Zones Model
 * Database table: zones
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IZones {
  zoneId?: number;
  zoneCountryId?: number;
  zoneCode?: string;
  zoneName?: string;
  timeZone?: Date;
  status?: string;
  value1?: string;
}

export interface ICreateZones {
  zoneId?: number;
  zoneCountryId?: number;
  zoneCode?: string;
  zoneName?: string;
  timeZone?: Date;
  status?: string;
  value1?: string;
}
export interface IUpdateZones {
  zoneId?: number;
  zoneCountryId?: number;
  zoneCode?: string;
  zoneName?: string;
  timeZone?: Date;
  status?: string;
  value1?: string;
}