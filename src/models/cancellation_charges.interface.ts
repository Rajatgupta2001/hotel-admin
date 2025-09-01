/**
 * CancellationCharges Model
 * Database table: cancellationcharges
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICancellationCharges {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  policydesc?: string;
  cancelationbforduration?: number;
  durationtype?: string;
  charge?: number;
  chargetype?: string;
  isdefault?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateCancellationCharges {
  hotelid?: number;
  title?: string;
  policydesc?: string;
  cancelationbforduration?: number;
  durationtype?: string;
  charge?: number;
  chargetype?: string;
  isdefault?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
export interface IUpdateCancellationCharges {
  hotelid?: number;
  title?: string;
  policydesc?: string;
  cancelationbforduration?: number;
  durationtype?: string;
  charge?: number;
  chargetype?: string;
  isdefault?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}