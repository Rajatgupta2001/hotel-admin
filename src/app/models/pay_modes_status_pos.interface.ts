/**
 * PayModesStatusPos Model
 * Database table: paymodesstatuspos
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPayModesStatusPos {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  posid?: number;
  titlekey?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreatePayModesStatusPos {
  hotelid?: number;
  posid?: number;
  titlekey?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdatePayModesStatusPos {
  hotelid?: number;
  posid?: number;
  titlekey?: string;
  createdby?: number;
  modifiedby?: number;
}