/**
 * TaxGroups Model
 * Database table: taxgroups
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ITaxGroups {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  groupname?: string;
  groupdesc?: string;
  status?: Date;
  shortorder?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateTaxGroups {
  hotelid?: number;
  groupname?: string;
  groupdesc?: string;
  status?: Date;
  shortorder?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateTaxGroups {
  hotelid?: number;
  groupname?: string;
  groupdesc?: string;
  status?: Date;
  shortorder?: number;
  createdby?: number;
  modifiedby?: number;
}