/**
 * SaleOrderConfirmation Model
 * Database table: saleorderconfirmation
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ISaleOrderConfirmation {
  id?: number;  // Primary key - auto-generated
  orderno?: string;
  hotelid?: number;
  applicablemodules?: string;
  salesdata?: string;
  irfstatus?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateSaleOrderConfirmation {
  orderno?: string;
  hotelid?: number;
  applicablemodules?: string;
  salesdata?: string;
  irfstatus?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateSaleOrderConfirmation {
  orderno?: string;
  hotelid?: number;
  applicablemodules?: string;
  salesdata?: string;
  irfstatus?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}