/**
 * ThirdPartyMapping Model Interfaces
 * Database table: thirdPartyMapping
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IThirdPartyMapping {
  id?: number;  // Primary key - auto-generated
  compid?: number;
  hotelid: number;  // Required
  rsvid?: number;  // Default: 0
  tablename: string;  // Required
  tableprimaryid: number;  // Required
  externalid: string;  // Required
  thirdpartycode: string;  // Required
  eventmediaid?: number;
  tptextdata?: string;
  createdon?: Date;  // Auto-populated timestamp
  updatedon?: Date;  // Default: text("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
}

// Create interface - for new entity creation
export interface ICreateThirdPartyMapping {
  compid?: number;
  hotelid: number;
  rsvid?: number;
  tablename: string;
  tableprimaryid: number;
  externalid: string;
  thirdpartycode: string;
  eventmediaid?: number;
  tptextdata?: string;
  updatedon?: Date;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateThirdPartyMapping {
  compid?: number;
  hotelid?: number;
  rsvid?: number;
  tablename?: string;
  tableprimaryid?: number;
  externalid?: string;
  thirdpartycode?: string;
  eventmediaid?: number;
  tptextdata?: string;
  updatedon?: Date;
}
