/**
 * Room Types Model
 */
export interface RoomType {
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
  minwebrsvallowed?: number;
  minweboccu?: number;
  maxweboccu?: number;
  searchonminwebocc?: number;
  publishonweb?: number;
  accountcodeid?: number;
  isderived?: number;
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
  createdby: number;
  status: string;
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
  modifiedby: number;
}
