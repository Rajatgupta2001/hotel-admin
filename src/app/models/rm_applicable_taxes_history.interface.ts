/**
 * RmApplicableTaxesHistory Model
 * Database table: rmapplicabletaxeshistory
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRmApplicableTaxesHistory {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  rmtypeid?: number;
  taxid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servmdate?: Date;
  status?: string;
  refid?: number;
  modificationtype?: string;
}

export interface ICreateRmApplicableTaxesHistory {
  hotelid?: number;
  rmtypeid?: number;
  taxid?: number;
  createdby?: number;
  modifiedby?: number;
  servmdate?: Date;
  status?: string;
  refid?: number;
  modificationtype?: string;
}
export interface IUpdateRmApplicableTaxesHistory {
  hotelid?: number;
  rmtypeid?: number;
  taxid?: number;
  createdby?: number;
  modifiedby?: number;
  servmdate?: Date;
  status?: string;
  refid?: number;
  modificationtype?: string;
}