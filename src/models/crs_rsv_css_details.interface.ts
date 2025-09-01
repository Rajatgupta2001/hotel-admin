/**
 * CrsRsvCssDetails Model
 * Database table: crsrsvcssdetails
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICrsRsvCssDetails {
  id?: number;  // Primary key - auto-generated
  apiid?: number;
  cssclassid?: number;
  cssclassattribute?: string;
  cssclassvalue?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateCrsRsvCssDetails {
  apiid?: number;
  cssclassid?: number;
  cssclassattribute?: string;
  cssclassvalue?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateCrsRsvCssDetails {
  apiid?: number;
  cssclassid?: number;
  cssclassattribute?: string;
  cssclassvalue?: string;
  createdby?: number;
  modifiedby?: number;
}