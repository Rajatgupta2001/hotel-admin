/**
 * ThirdPartyMapping Model
 * Database table: thirdpartymapping
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IThirdPartyMapping {
  id?: number;  // Primary key - auto-generated
  compid?: number;
  hotelid?: number;
  rsvid?: number;
  tablename?: string;
  tableprimaryid?: number;
  externalid?: string;
  thirdpartycode?: string;
  eventmediaid?: number;
  tptextdata?: string;
  createdon?: Date;  // Auto-populated timestamp
  updatedon?: Date;
}

export interface ICreateThirdPartyMapping {
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