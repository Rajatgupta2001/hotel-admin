/**
 * GstUpdate1stJuly2017 Model Interfaces
 * Database table: gstUpdate1stJuly2017
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IGstUpdate1stJuly2017 {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  refid?: number;
  reftype?: string;
  updatefor: string;  // Required
  description?: string;
  val1?: number;
  val2?: number;
  val3?: string;
  val4?: string;
  val5?: Date;
  val6?: Date;
  servcdate?: Date;  // Service date
  status: string;  // Required
}

// Create interface - for new entity creation
export interface ICreateGstUpdate1stJuly2017 {
  hotelid: number;
  refid?: number;
  reftype?: string;
  updatefor: string;
  description?: string;
  val1?: number;
  val2?: number;
  val3?: string;
  val4?: string;
  val5?: Date;
  val6?: Date;
  status: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateGstUpdate1stJuly2017 {
  hotelid?: number;
  refid?: number;
  reftype?: string;
  updatefor?: string;
  description?: string;
  val1?: number;
  val2?: number;
  val3?: string;
  val4?: string;
  val5?: Date;
  val6?: Date;
  status?: string;
}
