/**
 * RoomTypes Model
 * Database table: roomtypes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
import { IRsvRooms } from './rsv_rooms.interface';
import { IRooms } from './rooms.interface';

export interface IRoomTypes {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  accronym?: string;
  noofrooms?: number;
  image?: string;
  description?: string;
  imagename?: string;
  isoverbookingalwd?: number;
  overbookingvalue?: number;
  overbookingtype?: string;
  isgenderbase?: number;
  gender?: number;
  stdoccupancy?: number;
  higheroccupancy?: number;
  maxadult?: number;
  maxchild?: number;
  isbedalwd?: number;
  xtralwdbeds?: number;
  taxapplicableon?: string;
  shortorder?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  minwebrsvallowed?: number;
  minweboccu?: number;
  maxweboccu?: number;
  searchonminwebocc?: number;
  publishonweb?: number;
  accountcodeid?: number;
  type?: string;
  isderived?: number;
  rsvrooms?: IRsvRooms;
  rooms?: IRooms;
}

export interface ICreateRoomTypes {
  hotelid?: number;
  title?: string;
  accronym?: string;
  noofrooms?: number;
  image?: string;
  description?: string;
  imagename?: string;
  isoverbookingalwd?: number;
  overbookingvalue?: number;
  overbookingtype?: string;
  isgenderbase?: number;
  gender?: number;
  stdoccupancy?: number;
  higheroccupancy?: number;
  maxadult?: number;
  maxchild?: number;
  isbedalwd?: number;
  xtralwdbeds?: number;
  taxapplicableon?: string;
  shortorder?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  minwebrsvallowed?: number;
  minweboccu?: number;
  maxweboccu?: number;
  searchonminwebocc?: number;
  publishonweb?: number;
  accountcodeid?: number;
  type?: string;
  isderived?: number;
  rsvrooms?: IRsvRooms;
  rooms?: IRooms;
}
export interface IUpdateRoomTypes {
  hotelid?: number;
  title?: string;
  accronym?: string;
  noofrooms?: number;
  image?: string;
  description?: string;
  imagename?: string;
  isoverbookingalwd?: number;
  overbookingvalue?: number;
  overbookingtype?: string;
  isgenderbase?: number;
  gender?: number;
  stdoccupancy?: number;
  higheroccupancy?: number;
  maxadult?: number;
  maxchild?: number;
  isbedalwd?: number;
  xtralwdbeds?: number;
  taxapplicableon?: string;
  shortorder?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  minwebrsvallowed?: number;
  minweboccu?: number;
  maxweboccu?: number;
  searchonminwebocc?: number;
  publishonweb?: number;
  accountcodeid?: number;
  type?: string;
  isderived?: number;
  rsvrooms?: IRsvRooms;
  rooms?: IRooms;
}