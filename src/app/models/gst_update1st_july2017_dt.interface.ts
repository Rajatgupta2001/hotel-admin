/**
 * GstUpdate1stJuly2017Dt Model
 * Database table: gstupdate1stjuly2017dt
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IGstUpdate1stJuly2017Dt {
  id?: number;  // Primary key - auto-generated
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
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
}

export interface ICreateGstUpdate1stJuly2017Dt {
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
export interface IUpdateGstUpdate1stJuly2017Dt {
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