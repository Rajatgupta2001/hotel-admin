/**
 * HostecFolio Model
 * Database table: hostecfolio
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHostecFolio {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  foliono?: string;
  type?: string;
  typeid?: number;
  currency?: string;
  certificate?: string;
  certificateno?: string;
  satstamp?: string;
  datestamped?: string;
  certificatenosat?: string;
  sealcfd?: string;
  sealsat?: string;
  uuid?: string;
  message?: string;
  responsefolio?: string;
  factodate?: string;
  stamp?: string;
  filename?: string;
  series?: string;
  faultcode?: string;
  faultstring?: string;
  errorcode?: number;
  status?: string;
  description?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  retrycount?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  expirydate?: Date;
  xmlfile?: string;
  pdffile?: string;
}

export interface ICreateHostecFolio {
  hotelid?: number;
  foliono?: string;
  type?: string;
  typeid?: number;
  currency?: string;
  certificate?: string;
  certificateno?: string;
  satstamp?: string;
  datestamped?: string;
  certificatenosat?: string;
  sealcfd?: string;
  sealsat?: string;
  uuid?: string;
  message?: string;
  responsefolio?: string;
  factodate?: string;
  stamp?: string;
  filename?: string;
  series?: string;
  faultcode?: string;
  faultstring?: string;
  errorcode?: number;
  status?: string;
  description?: string;
  createdby?: number;
  retrycount?: number;
  modifiedby?: number;
  expirydate?: Date;
  xmlfile?: string;
  pdffile?: string;
}
export interface IUpdateHostecFolio {
  hotelid?: number;
  foliono?: string;
  type?: string;
  typeid?: number;
  currency?: string;
  certificate?: string;
  certificateno?: string;
  satstamp?: string;
  datestamped?: string;
  certificatenosat?: string;
  sealcfd?: string;
  sealsat?: string;
  uuid?: string;
  message?: string;
  responsefolio?: string;
  factodate?: string;
  stamp?: string;
  filename?: string;
  series?: string;
  faultcode?: string;
  faultstring?: string;
  errorcode?: number;
  status?: string;
  description?: string;
  createdby?: number;
  retrycount?: number;
  modifiedby?: number;
  expirydate?: Date;
  xmlfile?: string;
  pdffile?: string;
}