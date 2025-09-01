/**
 * ChannelTacodes Model
 * Database table: channeltacodes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IChannelTacodes {
  id?: number;  // Primary key - auto-generated
  gdstype?: string;
  code?: string;
  name?: string;
  desc?: string;
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
}

export interface ICreateChannelTacodes {
  gdstype?: string;
  code?: string;
  name?: string;
  desc?: string;
}
export interface IUpdateChannelTacodes {
  gdstype?: string;
  code?: string;
  name?: string;
  desc?: string;
}