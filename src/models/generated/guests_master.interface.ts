/**
 * GuestsMaster Model Interfaces
 * Database table: guestsMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IGuestsMaster {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  compid?: number;  // Default: 0
  regnumber?: string;
  memno?: string;
  vipno?: number;
  nationality?: number;
  businesssrcid?: number;  // Default: 0
  secrutyid?: number;
  identitytype?: number;
  identityno?: string;
  designation?: string;  // Default: ''
  spousesalutation?: string;
  spousefname?: string;  // Default: ''
  spouselname?: string;  // Default: ''
  spousedob?: Date;
  anniversary?: Date;
  languageid?: string;
  isblacklisted?: number;  // Default: 0
  preferences?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status?: string;  // Default: 'A'
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  rfctype?: number;
  rfccode?: string;
  gid?: string;
  val1?: string;
  donotshareinfo?: number;  // Default: 0
  guestcorpid?: number;
  signatureurl?: string;
}

// Create interface - for new entity creation
export interface ICreateGuestsMaster {
  compid?: number;
  regnumber?: string;
  memno?: string;
  vipno?: number;
  nationality?: number;
  businesssrcid?: number;
  secrutyid?: number;
  identitytype?: number;
  identityno?: string;
  designation?: string;
  spousesalutation?: string;
  spousefname?: string;
  spouselname?: string;
  spousedob?: Date;
  anniversary?: Date;
  languageid?: string;
  isblacklisted?: number;
  preferences?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  rfctype?: number;
  rfccode?: string;
  gid?: string;
  val1?: string;
  donotshareinfo?: number;
  guestcorpid?: number;
  signatureurl?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateGuestsMaster {
  compid?: number;
  regnumber?: string;
  memno?: string;
  vipno?: number;
  nationality?: number;
  businesssrcid?: number;
  secrutyid?: number;
  identitytype?: number;
  identityno?: string;
  designation?: string;
  spousesalutation?: string;
  spousefname?: string;
  spouselname?: string;
  spousedob?: Date;
  anniversary?: Date;
  languageid?: string;
  isblacklisted?: number;
  preferences?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  rfctype?: number;
  rfccode?: string;
  gid?: string;
  val1?: string;
  donotshareinfo?: number;
  guestcorpid?: number;
  signatureurl?: string;
}
