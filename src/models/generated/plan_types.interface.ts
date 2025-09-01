/**
 * PlanTypes Model Interfaces
 * Database table: planTypes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPlanTypes {
  id?: number;  // Primary key - auto-generated
  code?: string;
  title?: string;
  occurancy?: string;
  billtype?: string;
  rate?: number;
  minamount?: number;  // Default: text("'0.000000'"
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePlanTypes {
  code?: string;
  title?: string;
  occurancy?: string;
  billtype?: string;
  rate?: number;
  minamount?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePlanTypes {
  code?: string;
  title?: string;
  occurancy?: string;
  billtype?: string;
  rate?: number;
  minamount?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
