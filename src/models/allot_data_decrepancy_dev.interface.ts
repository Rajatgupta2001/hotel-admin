/**
 * AllotDataDecrepancyDev Model
 * Database table: allotdatadecrepancydev
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAllotDataDecrepancyDev {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  roomtypeid?: number;
  fromdate?: Date;
  noofrooms?: number;
  avlroom?: number;
}

export interface ICreateAllotDataDecrepancyDev {
  hotelid?: number;
  roomtypeid?: number;
  fromdate?: Date;
  noofrooms?: number;
  avlroom?: number;
}
export interface IUpdateAllotDataDecrepancyDev {
  hotelid?: number;
  roomtypeid?: number;
  fromdate?: Date;
  noofrooms?: number;
  avlroom?: number;
}