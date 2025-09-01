/**
 * ForexSupplyRule Model Interfaces
 * Database table: forexSupplyRule
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
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

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
