/**
 * InclGrpItemsHistory Model
 * Database table: inclgrpitemshistory
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IInclGrpItemsHistory {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  inclgrpid?: number;
  inclid?: number;
  price?: number;
  discount?: number;
  discounttype?: string;
  amount?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;
  refid?: number;
}

export interface ICreateInclGrpItemsHistory {
  hotelid?: number;
  inclgrpid?: number;
  inclid?: number;
  price?: number;
  discount?: number;
  discounttype?: string;
  amount?: number;
  modifiedby?: number;
  status?: string;
  refid?: number;
}
export interface IUpdateInclGrpItemsHistory {
  hotelid?: number;
  inclgrpid?: number;
  inclid?: number;
  price?: number;
  discount?: number;
  discounttype?: string;
  amount?: number;
  modifiedby?: number;
  status?: string;
  refid?: number;
}