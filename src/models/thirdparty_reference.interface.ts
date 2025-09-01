/**
 * ThirdpartyReference Model
 * Database table: thirdpartyreference
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
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
  status?: number;
  lastused?: Date;
}

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