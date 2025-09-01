import { RoomType } from '../models/room-type.model';
import { Room } from '../models/rooms/room.model';

export interface DBRoomType {
  id: number;
  hotelid: number;
  title: string;
  accronym: string;
  noofrooms: number;
  stdoccupancy: number;
  higheroccupancy: number;
  maxadult: number;
  maxchild: number;
  isbedalwd: number;
  shortorder: number;
  image?: string;
  description?: string;
  createdat?: string;
  updatedat?: string;
  roomtypename?: string;
  status: 'active' | 'inactive' | 'deleted';
  
  // Additional fields from legacy DB schema
  isoverbookingalwd?: number;
  overbookingvalue?: number;
  overbookingtype?: string;
  isgenderbase?: number;
  xtralwdbeds?: number;
  taxapplicableon?: string;
  createdby?: number;
  modifiedby?: number;
  publishonweb?: number;
};

export interface DBRoomTypeMin {
  id: number;
  hotelid?: number;
  title?: string;
  roomtypename?: string;
  accronym?: string;
  noofrooms?: number;
  stdoccupancy?: number;
  higheroccupancy?: number;
  maxadult?: number;
  maxchild?: number;
  isbedalwd?: number;
  shortorder?: number;
  createdat?: string;
  updatedat?: string;
  status?: 'active' | 'inactive' | 'deleted';
}

export function convertToRoomType(dbRoomType: DBRoomType | DBRoomTypeMin): RoomType {
  const now = new Date().toISOString();
  return {
    id: (dbRoomType.id || 0).toString(),
    hotelId: (dbRoomType.hotelid || 1).toString(),
    code: (dbRoomType.id || 0).toString(),
    name: dbRoomType.title || dbRoomType.roomtypename || '',
    acronym: dbRoomType.accronym || '',
    maxOccupancy: dbRoomType.higheroccupancy || 1,
    standardOccupancy: dbRoomType.stdoccupancy || 1,
    maxAdults: dbRoomType.maxadult || 1,
    maxChildren: dbRoomType.maxchild || 0,
    totalRooms: dbRoomType.noofrooms || 0,
    bedConfiguration: {
      singleBeds: 0,
      doubleBeds: 0,
      queenBeds: 0,
      kingBeds: 0,
      sofaBeds: 0,
      extraBedAllowed: dbRoomType.isbedalwd === 1,
      maxExtraBeds: 0
    },
    isWebBookable: true,
    allowOverbooking: false,
    overbookingType: 'percentage',
    amenityIds: [],
    features: {
      airConditioning: false,
      heating: false,
      wifi: false,
      tv: false,
      minibar: false,
      safe: false,
      balcony: false,
      kitchenette: false,
      livingArea: false,
      workspace: false,
      accessibility: false,
      petFriendly: false
    },
    isGenderRestricted: false,
    smokingPolicy: 'non-smoking',
    images: [],
    taxApplicableOn: 'room',
    displayOnWebsite: true,
    createdAt: new Date(dbRoomType.createdat || now),
    updatedAt: new Date(dbRoomType.updatedat || now),
    status: dbRoomType.status || 'active',
    sortOrder: dbRoomType.shortorder || 0
  };
}

export interface DBRoom {
  id: string;
  roomTypeId: string;
  roomNumber: string;
  floor: number;
  status: 'active' | 'inactive' | 'deleted';
};

export function convertToDBRoomType(roomType: RoomType): DBRoomType {
  return {
    id: parseInt(roomType.id),
    hotelid: parseInt(roomType.hotelId),
    title: roomType.name,
    accronym: roomType.acronym,
    noofrooms: roomType.totalRooms,
    stdoccupancy: roomType.standardOccupancy,
    higheroccupancy: roomType.maxOccupancy,
    maxadult: roomType.maxAdults,
    maxchild: roomType.maxChildren,
    isbedalwd: roomType.bedConfiguration.extraBedAllowed ? 1 : 0,
    shortorder: roomType.sortOrder,
    status: roomType.status as 'active' | 'inactive' | 'deleted',
    createdat: roomType.createdAt.toISOString(),
    updatedat: roomType.updatedAt.toISOString(),
    roomtypename: roomType.name,
    description: ''
  };
}

export function convertToRoom(dbRoom: DBRoom): Room {
  const now = new Date().toISOString();
  return {
    id: dbRoom.id,
    hotelId: '1',
    roomTypeId: dbRoom.roomTypeId,
    roomNumber: dbRoom.roomNumber,
    location: {
      floor: dbRoom.floor,
    },
    currentStatus: {
      status: 'available',
    },
    maintenanceStatus: {
      status: 'none',
      priority: 'low',
      issues: []
    },
    housekeepingStatus: {
      status: 'clean',
      priority: 'low'
    },
    allowOverbooking: false,
    isOutOfOrder: false,
    isVirtual: false,
    createdAt: new Date(now),
    updatedAt: new Date(now),
    status: dbRoom.status
  };
}
