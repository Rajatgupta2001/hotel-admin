/**
 * ColorCodings Model
 * Database table: colorcodings
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
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
  closedonarrdep?: string;
  closedonarr?: string;
  closedondep?: string;
  houseuseroomscolor?: string;
  contractbookingcolor?: string;
  partlyreservedcolor?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

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