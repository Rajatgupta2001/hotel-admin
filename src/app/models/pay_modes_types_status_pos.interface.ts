/**
 * PayModesTypesStatusPos Model
 * Database table: paymodestypesstatuspos
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPayModesTypesStatusPos {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  posid?: number;
  paymodetitlekey?: string;
  paytypeid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreatePayModesTypesStatusPos {
  hotelid?: number;
  posid?: number;
  paymodetitlekey?: string;
  paytypeid?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdatePayModesTypesStatusPos {
  hotelid?: number;
  posid?: number;
  paymodetitlekey?: string;
  paytypeid?: number;
  createdby?: number;
  modifiedby?: number;
}