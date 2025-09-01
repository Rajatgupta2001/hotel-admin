/**
 * WebRsvTextDetails Model
 * Database table: webrsvtextdetails
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IWebRsvTextDetails {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  textkey?: string;
  textvalue?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateWebRsvTextDetails {
  hotelid?: number;
  textkey?: string;
  textvalue?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateWebRsvTextDetails {
  hotelid?: number;
  textkey?: string;
  textvalue?: string;
  createdby?: number;
  modifiedby?: number;
}