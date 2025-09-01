/**
 * Pos2KotItem Model
 * Database table: pos2kotitem
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPos2KotItem {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  parentid?: number;
  parentrefid?: number;
  kotid?: number;
  kichenid?: number;
  productid?: number;
  productname?: string;
  itemhash?: string;
  description?: string;
  producttype?: number;
  unit?: number;
  suggestion?: string;
  choiceid?: number;
  choiceprice?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  shiftstatusid?: number;
  servingorder?: number;
  servinguserid?: number;
  counterid?: number;
  posid?: number;
  newitemid?: number;
  status?: string;
  oldtransid?: number;
}

export interface ICreatePos2KotItem {
  hotelid?: number;
  parentid?: number;
  parentrefid?: number;
  kotid?: number;
  kichenid?: number;
  productid?: number;
  productname?: string;
  itemhash?: string;
  description?: string;
  producttype?: number;
  unit?: number;
  suggestion?: string;
  choiceid?: number;
  choiceprice?: number;
  createdby?: number;
  modifiedby?: number;
  shiftstatusid?: number;
  servingorder?: number;
  servinguserid?: number;
  counterid?: number;
  posid?: number;
  newitemid?: number;
  status?: string;
  oldtransid?: number;
}
export interface IUpdatePos2KotItem {
  hotelid?: number;
  parentid?: number;
  parentrefid?: number;
  kotid?: number;
  kichenid?: number;
  productid?: number;
  productname?: string;
  itemhash?: string;
  description?: string;
  producttype?: number;
  unit?: number;
  suggestion?: string;
  choiceid?: number;
  choiceprice?: number;
  createdby?: number;
  modifiedby?: number;
  shiftstatusid?: number;
  servingorder?: number;
  servinguserid?: number;
  counterid?: number;
  posid?: number;
  newitemid?: number;
  status?: string;
  oldtransid?: number;
}