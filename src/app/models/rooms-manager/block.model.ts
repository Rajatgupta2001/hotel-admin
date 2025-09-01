import { BaseEntityWithCode, EntityId } from '../base.model';

export interface Block extends BaseEntityWithCode {
  hotelId: EntityId;
  floors: Floor[];
  totalRooms: number;
  totalFloors: number;
  isActive: boolean;
  coordinates?: BlockCoordinates;
  amenityIds: EntityId[];
}

export interface Floor {
  id: EntityId;
  blockId: EntityId;
  floorNumber: number;
  floorName: string;
  totalRooms: number;
  isActive: boolean;
  coordinates?: FloorCoordinates;
}

export interface BlockCoordinates {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface FloorCoordinates {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface CreateBlock {
  hotelId: EntityId;
  code: string;
  name: string;
  description?: string;
  isActive: boolean;
  coordinates?: BlockCoordinates;
}

export interface UpdateBlock {
  code?: string;
  name?: string;
  description?: string;
  isActive?: boolean;
  coordinates?: BlockCoordinates;
}
