/**
 * FilesMaster Model
 * Database table: filesmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
import { IGuestsMaster } from './guests_master.interface';
import { IAgents } from './agents.interface';
import { ICorporates } from './corporates.interface';

export interface IFilesMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  refid?: number;
  tablename?: string;
  subrefid?: number;
  subreftype?: string;
  file?: string;
  filetype?: string;
  description?: string;
  createdby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  colname?: string;
  caption?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  guest?: IGuestsMaster;
  agent?: IAgents;
  corporate?: ICorporates;
}

export interface ICreateFilesMaster {
  hotelid?: number;
  refid?: number;
  tablename?: string;
  subrefid?: number;
  subreftype?: string;
  file?: string;
  filetype?: string;
  description?: string;
  createdby?: number;
  status?: string;
  colname?: string;
  caption?: string;
  modifiedby?: number;
  guest?: IGuestsMaster;
  agent?: IAgents;
  corporate?: ICorporates;
}
export interface IUpdateFilesMaster {
  hotelid?: number;
  refid?: number;
  tablename?: string;
  subrefid?: number;
  subreftype?: string;
  file?: string;
  filetype?: string;
  description?: string;
  createdby?: number;
  status?: string;
  colname?: string;
  caption?: string;
  modifiedby?: number;
  guest?: IGuestsMaster;
  agent?: IAgents;
  corporate?: ICorporates;
}