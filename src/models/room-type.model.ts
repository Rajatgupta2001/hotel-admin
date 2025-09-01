/**
 * Room Type Models
 */

export interface RoomType {
  roomtypename: unknown;
  id: number;
  hotelid: number;
  title: string;
  accronym: string;
  noofrooms: number;
  image: string;
  description: string;
  imagename?: string;
  isoverbookingalwd: number;
  overbookingvalue: number;
  overbookingtype: string;
  isgenderbase: number;
  gender?: number;
  stdoccupancy: number;
  higheroccupancy: number;
  maxadult?: number;
  maxchild?: number;
  isbedalwd: number;
  xtralwdbeds: number;
  taxapplicableon: string;
  shortorder?: number;
  createdby: number;
  status: string;
  modifiedby: number;
  publishonweb?: number;
  accountcodeid?: number;
}

export interface CreateRoomType {
  hotelid: number;
  title: string;
  accronym: string;
  noofrooms: number;
  image: string;
  description: string;
  imagename?: string;
  isoverbookingalwd: number;
  overbookingvalue: number;
  overbookingtype: string;
  isgenderbase: number;
  gender?: number;
  stdoccupancy: number;
  higheroccupancy: number;
  maxadult?: number;
  maxchild?: number;
  isbedalwd: number;
  xtralwdbeds: number;
  taxapplicableon: string;
  shortorder?: number;
  status: string;
  publishonweb?: number;
  accountcodeid?: number;
  createdby?: number;
  modifiedby?: number;
}

export interface UpdateRoomType {
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
  status?: string;
  publishonweb?: number;
  accountcodeid?: number;
  modifiedby?: number;
}
