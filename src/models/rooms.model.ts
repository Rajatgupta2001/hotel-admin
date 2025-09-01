/**
 * Rooms Model
 */
export interface Room {
  id: number;
  hotelid: number;
  floorid?: number;
  blockid?: number;
  rmtypeid: number;
  rmnameorno: string;
  roomcode: string;
  description: string;
  createdby: number;
  sortorder?: number;
  status: string;
  modifiedby?: number;
  nacreatedon?: Date;
  deletedon?: Date;
  hoteldeletedon?: Date;
  type?: string;
}

export interface CreateRoom {
  hotelid: number;
  floorid?: number;
  blockid?: number;
  rmtypeid: number;
  rmnameorno: string;
  roomcode: string;
  description: string;
  createdby: number;
  sortorder?: number;
  status: string;
  type?: string;
}

export interface UpdateRoom {
  floorid?: number;
  blockid?: number;
  rmtypeid?: number;
  rmnameorno?: string;
  roomcode?: string;
  description?: string;
  sortorder?: number;
  status?: string;
  modifiedby: number;
  type?: string;
}
