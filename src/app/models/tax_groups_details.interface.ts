/**
 * TaxGroupsDetails Model
 * Database table: taxgroupsdetails
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ITaxGroupsDetails {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  groupid?: number;
  taxid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateTaxGroupsDetails {
  hotelid?: number;
  groupid?: number;
  taxid?: number;
  createdby?: number;
}
export interface IUpdateTaxGroupsDetails {
  hotelid?: number;
  groupid?: number;
  taxid?: number;
  createdby?: number;
}