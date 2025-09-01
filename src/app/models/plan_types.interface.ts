/**
 * PlanTypes Model
 * Database table: plantypes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPlanTypes {
  id?: number;  // Primary key - auto-generated
  code?: string;
  title?: string;
  occurancy?: string;
  billtype?: string;
  rate?: number;
  minamount?: number;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

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