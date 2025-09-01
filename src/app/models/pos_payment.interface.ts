/**
 * PosPayment Model
 * Database table: pospayment
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosPayment {
  id?: string;  // Primary key - auto-generated
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
  groupid?: Date;
  toroomid?: string;
  transfertoroomid?: Date;
  transfertoroomguestid?: Date;
  paymenttype?: string;
  cardtype?: string;
  ccchequeno?: string;
  receipt?: string;
  description?: string;
  amount?: number;
  paidamtothercurr?: number;
  isconverted?: number;
  exchangerate?: number;
  excurency?: string;
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
  moved?: number;
  isadjustment?: number;
  issync?: number;
  bankid?: number;
}

export interface ICreatePosPayment {
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
  groupid?: Date;
  toroomid?: string;
  transfertoroomid?: Date;
  transfertoroomguestid?: Date;
  paymenttype?: string;
  cardtype?: string;
  ccchequeno?: string;
  receipt?: string;
  description?: string;
  amount?: number;
  paidamtothercurr?: number;
  isconverted?: number;
  exchangerate?: number;
  excurency?: string;
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
export interface IUpdatePosPayment {
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
  groupid?: Date;
  toroomid?: string;
  transfertoroomid?: Date;
  transfertoroomguestid?: Date;
  paymenttype?: string;
  cardtype?: string;
  ccchequeno?: string;
  receipt?: string;
  description?: string;
  amount?: number;
  paidamtothercurr?: number;
  isconverted?: number;
  exchangerate?: number;
  excurency?: string;
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