/**
 * AlternateTaxes Model
 * Database table: alternatetaxes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAlternateTaxes {
  hotelid?: number;
  taxmasterid?: number;
  alternatetaxid?: number;
  activationdate?: Date;
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
}

export interface ICreateAlternateTaxes {
  hotelid?: number;
  taxmasterid?: number;
  alternatetaxid?: number;
  activationdate?: Date;
}
export interface IUpdateAlternateTaxes {
  hotelid?: number;
  taxmasterid?: number;
  alternatetaxid?: number;
  activationdate?: Date;
}