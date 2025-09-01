import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { HotelStore } from './hotel-store.service';
import { Role, Department, User, UserRole } from '../models/user.model';
import { RoomType } from '../models/room-type.model';
import { Room } from '../models/room.model';
import { EntityId } from '../models/base.model';

function mkRole(name: string): Role {
  const now = new Date();
  return {
    id: '' as EntityId,
    createdAt: now,
    updatedAt: now,
    status: 'active',
    hotelId: 'H' as EntityId,
    name,
    displayName: name,
    permissions: [],
    isSystemRole: false,
    isDefault: false,
  } as Role;
}

function mkDept(code: string, name?: string): Department {
  const now = new Date();
  return {
    id: '' as EntityId,
    createdAt: now,
    updatedAt: now,
    status: 'active',
    hotelId: 'H' as EntityId,
    code,
    name: name || code,
    isActive: true,
  } as Department;
}

function mkRoomType(code: string, name?: string): RoomType {
  const now = new Date();
  return {
    id: '' as EntityId,
    createdAt: now,
    updatedAt: now,
    status: 'active',
    hotelId: 'H' as EntityId,
    code,
    name: name || code,
    description: `Test room type ${code}`,
    acronym: code,
    maxOccupancy: 3,
    standardOccupancy: 2,
    maxAdults: 2,
    maxChildren: 1,
    totalRooms: 10,
    bedConfiguration: {
      singleBeds: 0,
      doubleBeds: 1,
      queenBeds: 0,
      kingBeds: 0,
      sofaBeds: 0,
      extraBedAllowed: false,
      maxExtraBeds: 0,
    },
    isWebBookable: true,
    allowOverbooking: false,
    sortOrder: 0,
  } as RoomType;
}

function mkRoom(roomNumber: string, roomTypeId: EntityId): Room {
  const now = new Date();
  return {
    id: '' as EntityId,
    createdAt: now,
    updatedAt: now,
    status: 'active',
    hotelId: 'H' as EntityId,
    roomTypeId,
    roomNumber,
    location: {
      floor: 1,
      building: 'Main',
      wing: 'A',
      coordinates: { x: 0, y: 0 },
    },
    currentStatus: {
      status: 'available',
      guestCount: 0,
    },
    maintenanceStatus: {
      status: 'none',
      priority: 'low',
      issues: [],
    },
    housekeepingStatus: {
      status: 'clean',
      lastCleaned: now,
      priority: 'low',
      estimatedTime: 30,
    },
    allowOverbooking: false,
    isOutOfOrder: false,
    isVirtual: false,
  } as Room;
}

function mkUser(
  username: string,
  roleId: EntityId,
  departmentId?: EntityId,
): User {
  const now = new Date();
  const roles: UserRole[] = [
    {
      roleId,
      roleName: 'Role',
      assignedAt: now,
      assignedBy: roleId,
      isActive: true,
    } as UserRole,
  ];
  return {
    id: '' as EntityId,
    createdAt: now,
    updatedAt: now,
    status: 'active',
    hotelId: 'H' as EntityId,
    firstName: 'First',
    lastName: 'Last',
    email: 'a@b.com',
    username,
    bloodgroup: 'O+', // Required property
    workAreas: ['Frontdesk'],
    mustChangePassword: false,
    preferredLanguage: 'en',
    timezone: 'UTC',
    employmentType: 'full-time',
    roles,
    permissions: [],
    isActive: true,
    failedLoginAttempts: 0,
    twoFactorEnabled: false,
    notificationSettings: {
      email: { enabled: true, frequency: 'immediate', types: [] },
      sms: { enabled: false, types: [] },
      inApp: { enabled: true, types: [] },
      desktop: { enabled: false, types: [] },
    },
    maxConcurrentSessions: 1,
    sessionTimeoutMinutes: 30,
    departmentId,
  } as User;
}

describe('HotelStore (uniqueness and validations)', () => {
  let store: HotelStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: PLATFORM_ID, useValue: 'browser' }, HotelStore],
    });
    store = TestBed.inject(HotelStore);
    store.resetAll();
  });

  it('enforces unique role names (case-insensitive)', () => {
    const r1 = mkRole('Manager');
    const r2 = mkRole('manager');
    expect(store.addRole(r1).ok).toBeTrue();
    const res = store.addRole(r2);
    expect(res.ok).toBeFalse();
    expect(res.errors?.[0]).toContain('Role name must be unique');
  });

  it('enforces unique department codes (case-insensitive)', () => {
    const d1 = mkDept('HK', 'Housekeeping');
    const d2 = mkDept('hk', 'HK2');
    expect(store.addDepartment(d1).ok).toBeTrue();
    const res = store.addDepartment(d2);
    expect(res.ok).toBeFalse();
    expect(res.errors?.[0]).toContain('Department code must be unique');
  });

  it('enforces unique room numbers', () => {
    const rt = mkRoomType('DLX', 'Deluxe');
    expect(store.addRoomType(rt).ok).toBeTrue();
    const rtId = store.roomTypes()[0].id as EntityId;
    expect(store.addRoom(mkRoom('101', rtId)).ok).toBeTrue();
    const dup = store.addRoom(mkRoom('101', rtId));
    expect(dup.ok).toBeFalse();
    expect(dup.errors?.[0]).toContain('Room number must be unique');
  });

  it('enforces unique usernames and valid references on users', () => {
    // Setup role and dept
    const r = mkRole('Agent');
    const d = mkDept('FO', 'Front Office');
    expect(store.addRole(r).ok).toBeTrue();
    expect(store.addDepartment(d).ok).toBeTrue();
    const roleId = store.roles()[0].id as EntityId;
    const deptId = store.departments()[0].id as EntityId;

    expect(store.addUser(mkUser('alice', roleId, deptId)).ok).toBeTrue();
    const dup = store.addUser(mkUser('Alice', roleId, deptId));
    expect(dup.ok).toBeFalse();
    expect(dup.errors?.[0]).toContain('Username must be unique');
  });

  it('rejects user referencing invalid role/department', () => {
    const bad = store.addUser(
      mkUser('bob', 'missing' as EntityId, 'bad' as EntityId),
    );
    expect(bad.ok).toBeFalse();
    expect(bad.errors?.[0]).toBeDefined();
  });
});
