/**
 * AccountMapper Model
 * Database table: accountmapper
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAccountMapper {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  maptype?: string;
  localaccountcode?: string;
  remoteaccountcode?: string;
  updated?: Date;
  remoteaccountextra?: string;
  refid?: number;
  reftype?: string;
  subrefid?: number;
  subreftype?: string;
  value1?: string;
  value2?: string;
  value3?: string;
  customaccountname?: string;
}

export interface ICreateAccountMapper {
  hotelid?: number;
  maptype?: string;
  localaccountcode?: string;
  remoteaccountcode?: string;
  updated?: Date;
  remoteaccountextra?: string;
  refid?: number;
  reftype?: string;
  subrefid?: number;
  subreftype?: string;
  value1?: string;
  value2?: string;
  value3?: string;
  customaccountname?: string;
}
export interface IUpdateAccountMapper {
  hotelid?: number;
  maptype?: string;
  localaccountcode?: string;
  remoteaccountcode?: string;
  updated?: Date;
  remoteaccountextra?: string;
  refid?: number;
  reftype?: string;
  subrefid?: number;
  subreftype?: string;
  value1?: string;
  value2?: string;
  value3?: string;
  customaccountname?: string;
}