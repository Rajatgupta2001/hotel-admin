/**
 * WebRsvCssMaster Model
 * Database table: webrsvcssmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IWebRsvCssMaster {
  id?: number;  // Primary key - auto-generated
  cssclassname?: string;
  reftypetext?: string;
  status?: string;
  shortorder?: number;
}

export interface ICreateWebRsvCssMaster {
  cssclassname?: string;
  reftypetext?: string;
  status?: string;
  shortorder?: number;
}
export interface IUpdateWebRsvCssMaster {
  cssclassname?: string;
  reftypetext?: string;
  status?: string;
  shortorder?: number;
}