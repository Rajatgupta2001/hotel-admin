/**
 * PosApiHash Model
 * Database table: posapihash
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosApiHash {
  apihash?: string;
  hotelid?: number;
  posid?: number;
  orderid?: string;
  ordertype?: string;
  reqtime?: Date;
}

export interface ICreatePosApiHash {
  apihash?: string;
  hotelid?: number;
  posid?: number;
  orderid?: string;
  ordertype?: string;
  reqtime?: Date;
}
export interface IUpdatePosApiHash {
  apihash?: string;
  hotelid?: number;
  posid?: number;
  orderid?: string;
  ordertype?: string;
  reqtime?: Date;
}