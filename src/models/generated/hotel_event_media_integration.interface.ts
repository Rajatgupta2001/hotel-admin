/**
 * HotelEventMediaIntegration Model Interfaces
 * Database table: hotelEventMediaIntegration
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotelEventMediaIntegration {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  eventmediaintegrationid: number;  // Required
  status?: string;  // Default: 'A'
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

// Create interface - for new entity creation
export interface ICreateHotelEventMediaIntegration {
  hotelid: number;
  eventmediaintegrationid: number;
  status?: string;
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

// Update interface - for entity updates (all fields optional)
export interface IUpdateHotelEventMediaIntegration {
  hotelid?: number;
  eventmediaintegrationid?: number;
  status?: string;
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
