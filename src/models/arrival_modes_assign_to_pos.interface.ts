/**
 * ArrivalModesAssignToPos Model
 * Database table: arrivalmodesassigntopos
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IArrivalModesAssignToPos {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  refid?: number;
  posid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateArrivalModesAssignToPos {
  hotelid?: number;
  refid?: number;
  posid?: number;
  createdby?: number;
}
export interface IUpdateArrivalModesAssignToPos {
  hotelid?: number;
  refid?: number;
  posid?: number;
  createdby?: number;
}