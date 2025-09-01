/**
 * ColorCodings Model Interfaces
 * Database table: colorCodings
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IColorCodings {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  reservationroomscolor?: string;
  checkedinroomscolor?: string;
  checkedoutroomscolor?: string;
  blockedroomscolor?: string;
  touchuproomscolor?: string;
  dirtyroomscolor?: string;
  inspectroomscolor?: string;
  cleanroomscolor?: string;
  repairroomscolor?: string;
  releaseroomcolor?: string;
  overbookroomscolor?: string;
  closedonarrdep?: string;  // Default: text("'B7D787'"
  closedonarr?: string;  // Default: text("'D6BCBC'"
  closedondep?: string;  // Default: text("'CFA7CF'"
  houseuseroomscolor?: string;
  contractbookingcolor?: string;  // Default: text("'FFCACA'"
  partlyreservedcolor?: string;  // Default: text("'FFCACA'"
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateColorCodings {
  hotelid?: number;
  reservationroomscolor?: string;
  checkedinroomscolor?: string;
  checkedoutroomscolor?: string;
  blockedroomscolor?: string;
  touchuproomscolor?: string;
  dirtyroomscolor?: string;
  inspectroomscolor?: string;
  cleanroomscolor?: string;
  repairroomscolor?: string;
  releaseroomcolor?: string;
  overbookroomscolor?: string;
  closedonarrdep?: string;
  closedonarr?: string;
  closedondep?: string;
  houseuseroomscolor?: string;
  contractbookingcolor?: string;
  partlyreservedcolor?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateColorCodings {
  hotelid?: number;
  reservationroomscolor?: string;
  checkedinroomscolor?: string;
  checkedoutroomscolor?: string;
  blockedroomscolor?: string;
  touchuproomscolor?: string;
  dirtyroomscolor?: string;
  inspectroomscolor?: string;
  cleanroomscolor?: string;
  repairroomscolor?: string;
  releaseroomcolor?: string;
  overbookroomscolor?: string;
  closedonarrdep?: string;
  closedonarr?: string;
  closedondep?: string;
  houseuseroomscolor?: string;
  contractbookingcolor?: string;
  partlyreservedcolor?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
