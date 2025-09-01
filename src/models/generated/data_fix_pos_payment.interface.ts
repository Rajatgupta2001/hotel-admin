/**
 * DataFixPosPayment Model Interfaces
 * Database table: dataFix_posPayment
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IDataFixPosPayment {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pospaymentmasterid?: number;
  counterid?: number;
  countersessionid?: number;
  sessionid?: string;
  pospointid?: number;
  foliono?: string;
  parentfoliono?: string;
  customfoliono?: string;
  customparentfoliono?: string;
  invoiceid?: string;
  groupid?: string;  // Default: 0
  toroomid?: string;
  transfertoroomid?: string;  // Default: 0
  transfertoroomguestid?: string;  // Default: 0
  paymenttype?: string;
  cardtype?: string;
  ccchequeno?: string;
  receipt?: string;
  description?: string;
  amount?: number;
  paidamtothercurr?: number;  // Default: text("'0.000000'"
  isconverted?: number;  // Default: 0
  exchangerate?: number;  // Default: text("'0.000000'"
  excurrency?: string;
  gatewaytransdata?: string;
  servicecharge?: number;
  changeservicecharge?: number;
  servicechargereason?: Date;
  cfname?: string;
  clname?: string;
  nadate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: string;  // User ID reference
  paynowortrnsroom?: string;
  moved?: number;  // Default: 0
  isadjustment?: number;  // Default: 0
  issync?: number;  // Default: 0
  bankid?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateDataFixPosPayment {
  hotelid?: number;
  pospaymentmasterid?: number;
  counterid?: number;
  countersessionid?: number;
  sessionid?: string;
  pospointid?: number;
  foliono?: string;
  parentfoliono?: string;
  customfoliono?: string;
  customparentfoliono?: string;
  invoiceid?: string;
  groupid?: string;
  toroomid?: string;
  transfertoroomid?: string;
  transfertoroomguestid?: string;
  paymenttype?: string;
  cardtype?: string;
  ccchequeno?: string;
  receipt?: string;
  description?: string;
  amount?: number;
  paidamtothercurr?: number;
  isconverted?: number;
  exchangerate?: number;
  excurrency?: string;
  gatewaytransdata?: string;
  servicecharge?: number;
  changeservicecharge?: number;
  servicechargereason?: Date;
  cfname?: string;
  clname?: string;
  nadate?: Date;
  createdby?: string;
  paynowortrnsroom?: string;
  moved?: number;
  isadjustment?: number;
  issync?: number;
  bankid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateDataFixPosPayment {
  hotelid?: number;
  pospaymentmasterid?: number;
  counterid?: number;
  countersessionid?: number;
  sessionid?: string;
  pospointid?: number;
  foliono?: string;
  parentfoliono?: string;
  customfoliono?: string;
  customparentfoliono?: string;
  invoiceid?: string;
  groupid?: string;
  toroomid?: string;
  transfertoroomid?: string;
  transfertoroomguestid?: string;
  paymenttype?: string;
  cardtype?: string;
  ccchequeno?: string;
  receipt?: string;
  description?: string;
  amount?: number;
  paidamtothercurr?: number;
  isconverted?: number;
  exchangerate?: number;
  excurrency?: string;
  gatewaytransdata?: string;
  servicecharge?: number;
  changeservicecharge?: number;
  servicechargereason?: Date;
  cfname?: string;
  clname?: string;
  nadate?: Date;
  createdby?: string;
  paynowortrnsroom?: string;
  moved?: number;
  isadjustment?: number;
  issync?: number;
  bankid?: number;
}
