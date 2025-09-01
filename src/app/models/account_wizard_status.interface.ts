/**
 * AccountWizardStatus Model
 * Database table: accountwizardstatus
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAccountWizardStatus {
  id?: number;  // Primary key - auto-generated
  compid?: number;
  hotelid?: number;
  email?: string;
  stepcompleted?: string;
  isfinished?: number;
  newssource?: string;
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
  status?: string;
}

export interface ICreateAccountWizardStatus {
  compid?: number;
  hotelid?: number;
  email?: string;
  stepcompleted?: string;
  isfinished?: number;
  newssource?: string;
  status?: string;
}
export interface IUpdateAccountWizardStatus {
  compid?: number;
  hotelid?: number;
  email?: string;
  stepcompleted?: string;
  isfinished?: number;
  newssource?: string;
  status?: string;
}