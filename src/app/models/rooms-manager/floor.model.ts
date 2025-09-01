import { BaseEntityWithCode, EntityId } from '../base.model';

export interface Floor extends BaseEntityWithCode {
  hotelId: EntityId;
  blockId: EntityId;
  floorNumber: number;
  totalRooms: number;
  availableRooms: number;
  occupiedRooms: number;
  outOfOrderRooms: number;
  maintenanceRooms: number;
  isActive: boolean;
  coordinates?: FloorCoordinates;
  amenityIds: EntityId[];
  roomIds: EntityId[];
}

export interface FloorCoordinates {
  x: number;
  y: number;
  width: number;
  height: number;
  rotation?: number;
}

export interface CreateFloor {
  hotelId: EntityId;
  blockId: EntityId;
  code: string;
  name: string;
  floorNumber: number;
  description?: string;
  isActive: boolean;
  coordinates?: FloorCoordinates;
}

export interface UpdateFloor {
  blockId?: EntityId;
  code?: string;
  name?: string;
  floorNumber?: number;
  description?: string;
  isActive?: boolean;
  coordinates?: FloorCoordinates;
}
