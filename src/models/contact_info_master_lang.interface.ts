import type { IContactInfoMaster } from './contact_info_master.interface';
/**
 * ContactInfoMasterLang Model
 * Database table: contactinfomasterlang
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IContactInfoMasterLang {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  fname?: string;
  lname?: string;
}

export interface ICreateContactInfoMasterLang {
  hotelid?: number;
  fname?: string;
  lname?: string;
}
export interface IUpdateContactInfoMasterLang {
  hotelid?: number;
  fname?: string;
  lname?: string;
}