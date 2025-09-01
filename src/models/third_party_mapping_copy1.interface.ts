/**
 * ThirdPartyMappingCopy1 Model
 * Database table: thirdpartymappingcopy1
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IThirdPartyMappingCopy1 {
  id?: number;  // Primary key - auto-generated
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

export interface ICreateThirdPartyMappingCopy1 {
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
export interface IUpdateThirdPartyMappingCopy1 {
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