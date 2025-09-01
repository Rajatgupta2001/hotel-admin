/**
 * RmApplicableTaxes Model
 * Database table: rmapplicabletaxes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
import { ITaxMaster } from './tax_master.interface';
export interface IRmApplicableTaxes {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  rmtypeid?: number;
  taxid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  taxmaster?: ITaxMaster;
}

export interface ICreateRmApplicableTaxes {
  hotelid?: number;
  rmtypeid?: number;
  taxid?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  taxmaster?: ITaxMaster;
}
export interface IUpdateRmApplicableTaxes {
  hotelid?: number;
  rmtypeid?: number;
  taxid?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  taxmaster?: ITaxMaster;
}