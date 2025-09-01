/**
 * ThirdpartyReference Model Interfaces
 * Database table: thirdpartyReference
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IThirdpartyReference {
  id?: number;  // Primary key - auto-generated
  refid?: number;
  reftype?: string;
  tpid?: string;
  tptype?: string;
  val1?: string;
  val2?: string;
  val3?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: number;  // Default: text("'1'"
  lastused?: Date;
}

// Create interface - for new entity creation
export interface ICreateThirdpartyReference {
  refid?: number;
  reftype?: string;
  tpid?: string;
  tptype?: string;
  val1?: string;
  val2?: string;
  val3?: string;
  createdby?: number;
  modifiedby?: number;
  status?: number;
  lastused?: Date;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateThirdpartyReference {
  refid?: number;
  reftype?: string;
  tpid?: string;
  tptype?: string;
  val1?: string;
  val2?: string;
  val3?: string;
  createdby?: number;
  modifiedby?: number;
  status?: number;
  lastused?: Date;
}
