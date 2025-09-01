/**
 * OtherRoomChargeTaxes Model
 * Database table: otherroomchargetaxes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IOtherRoomChargeTaxes {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  taxid?: number;
  isactive?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;
}

export interface ICreateOtherRoomChargeTaxes {
  hotelid?: number;
  taxid?: number;
  isactive?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}
export interface IUpdateOtherRoomChargeTaxes {
  hotelid?: number;
  taxid?: number;
  isactive?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}