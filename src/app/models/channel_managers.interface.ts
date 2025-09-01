/**
 * ChannelManagers Model
 * Database table: channelmanagers
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IChannelManagers {
  id?: number;  // Primary key - auto-generated
  name?: string;
  code?: string;
  description?: string;
  ratetesturl?: string;
  rateliveurl?: string;
  ruletesturl?: string;
  ruleliveurl?: string;
  allottesturl?: string;
  allotliveurl?: string;
  supportedmods?: number;
  mode?: number;
  testgdshotelid?: string;
  isdailyrate?: number;
  username?: string;
  password?: string;
  ip?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  updatedon?: Date;
  updatedby?: number;
  isaddons?: number;
}

export interface ICreateChannelManagers {
  name?: string;
  code?: string;
  description?: string;
  ratetesturl?: string;
  rateliveurl?: string;
  ruletesturl?: string;
  ruleliveurl?: string;
  allottesturl?: string;
  allotliveurl?: string;
  supportedmods?: number;
  mode?: number;
  testgdshotelid?: string;
  isdailyrate?: number;
  username?: string;
  password?: string;
  ip?: string;
  createdby?: number;
  updatedon?: Date;
  updatedby?: number;
  isaddons?: number;
}
export interface IUpdateChannelManagers {
  name?: string;
  code?: string;
  description?: string;
  ratetesturl?: string;
  rateliveurl?: string;
  ruletesturl?: string;
  ruleliveurl?: string;
  allottesturl?: string;
  allotliveurl?: string;
  supportedmods?: number;
  mode?: number;
  testgdshotelid?: string;
  isdailyrate?: number;
  username?: string;
  password?: string;
  ip?: string;
  createdby?: number;
  updatedon?: Date;
  updatedby?: number;
  isaddons?: number;
}