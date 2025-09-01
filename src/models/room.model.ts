/**
 * Room Models
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
  status: any;
  modifiedby?: number;
  nacreatedon?: Date;
  deletedon?: Date;
  hoteldeletedon?: Date;
  type?: any;
}

export interface CreateRoom {
  hotelid: number;
  floorid?: number;
  blockid?: number;
  rmtypeid: number;
  rmnameorno: string;
  roomcode: string;
  description: string;
  sortorder?: number;
  status: any;
  createdby?: number;
  modifiedby?: number;
  nacreatedon?: Date;
  deletedon?: Date;
  hoteldeletedon?: Date;
  type?: any;
}

export interface UpdateRoom {
  floorid?: number;
  blockid?: number;
  rmtypeid?: number;
  rmnameorno?: string;
  roomcode?: string;
  description?: string;
  sortorder?: number;
  status?: any;
  modifiedby?: number;
  nacreatedon?: Date;
  deletedon?: Date;
  hoteldeletedon?: Date;
  type?: any;
}
