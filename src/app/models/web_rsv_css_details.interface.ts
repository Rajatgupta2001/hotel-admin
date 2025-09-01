/**
 * WebRsvCssDetails Model
 * Database table: webrsvcssdetails
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IWebRsvCssDetails {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  cssclassid?: number;
  cssclassattribute?: string;
  cssclassvalue?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateWebRsvCssDetails {
  hotelid?: number;
  cssclassid?: number;
  cssclassattribute?: string;
  cssclassvalue?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateWebRsvCssDetails {
  hotelid?: number;
  cssclassid?: number;
  cssclassattribute?: string;
  cssclassvalue?: string;
  createdby?: number;
  modifiedby?: number;
}