/**
 * HostecFolio Model Interfaces
 * Database table: hostecFolio
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHostecFolio {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  foliono: string;  // Required
  type?: string;
  typeid?: number;
  currency: string;  // Required
  certificate: string;  // Required
  certificateno: string;  // Required
  satstamp: string;  // Required
  datestamped: string;  // Required
  certificatenosat: string;  // Required
  sealcfd: string;  // Required
  sealsat: string;  // Required
  uuid?: string;
  message?: string;
  responsefolio?: string;
  factodate: string;  // Required
  stamp: string;  // Required
  filename?: string;
  series?: string;
  faultcode?: string;
  faultstring?: string;
  errorcode?: number;  // Default: 0
  status?: string;
  description?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  retrycount?: number;  // Default: 0
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  expirydate: Date;  // Required
  xmlfile: string;  // Required
  pdffile: string;  // Required
}

// Create interface - for new entity creation
export interface ICreateHostecFolio {
  hotelid: number;
  foliono: string;
  type?: string;
  typeid?: number;
  currency: string;
  certificate: string;
  certificateno: string;
  satstamp: string;
  datestamped: string;
  certificatenosat: string;
  sealcfd: string;
  sealsat: string;
  uuid?: string;
  message?: string;
  responsefolio?: string;
  factodate: string;
  stamp: string;
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
  expirydate: Date;
  xmlfile: string;
  pdffile: string;
}

// Update interface - for entity updates (all fields optional)
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
