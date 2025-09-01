/**
 * ForexSupplyRule Model
 * Database table: forexsupplyrule
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IForexSupplyRule {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  chargetype?: string;
  exchangeminvalue?: number;
  exchangemaxvalue?: number;
  valueofsupply?: number;
  minvosvalue?: number;
  maxvosvalue?: number;
  createdby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
}

export interface ICreateForexSupplyRule {
  hotelid?: number;
  chargetype?: string;
  exchangeminvalue?: number;
  exchangemaxvalue?: number;
  valueofsupply?: number;
  minvosvalue?: number;
  maxvosvalue?: number;
  createdby?: number;
}
export interface IUpdateForexSupplyRule {
  hotelid?: number;
  chargetype?: string;
  exchangeminvalue?: number;
  exchangemaxvalue?: number;
  valueofsupply?: number;
  minvosvalue?: number;
  maxvosvalue?: number;
  createdby?: number;
}