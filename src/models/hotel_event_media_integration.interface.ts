/**
 * HotelEventMediaIntegration Model
 * Database table: hoteleventmediaintegration
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHotelEventMediaIntegration {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  eventmediaintegrationid?: number;
  status?: Date;
  value1?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  value5?: string;
  value6?: string;
  confdata?: string;
  failoverEmails?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateHotelEventMediaIntegration {
  hotelid?: number;
  eventmediaintegrationid?: number;
  status?: Date;
  value1?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  value5?: string;
  value6?: string;
  confdata?: string;
  failoverEmails?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateHotelEventMediaIntegration {
  hotelid?: number;
  eventmediaintegrationid?: number;
  status?: Date;
  value1?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  value5?: string;
  value6?: string;
  confdata?: string;
  failoverEmails?: string;
  createdby?: number;
  modifiedby?: number;
}