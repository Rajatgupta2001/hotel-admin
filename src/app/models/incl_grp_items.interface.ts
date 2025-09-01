/**
 * InclGrpItems Model
 * Database table: inclgrpitems
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IInclGrpItems {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  inclgrpid?: number;
  inclid?: number;
  price?: number;
  discount?: number;
  discounttype?: string;
  amount?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  sessionid?: string;
}

export interface ICreateInclGrpItems {
  hotelid?: number;
  inclgrpid?: number;
  inclid?: number;
  price?: number;
  discount?: number;
  discounttype?: string;
  amount?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  sessionid?: string;
}
export interface IUpdateInclGrpItems {
  hotelid?: number;
  inclgrpid?: number;
  inclid?: number;
  price?: number;
  discount?: number;
  discounttype?: string;
  amount?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  sessionid?: string;
}