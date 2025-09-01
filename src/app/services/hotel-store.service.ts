import {
  Injectable,
  PLATFORM_ID,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { EntityId } from '../models/base.model';
import { Hotel } from '../models/hotel.model';
import { RoomType } from '../models/room-type.model';
import { Room } from '../models/room.model';
import { Tax } from '../models/tax.model';
import { Amenity } from '../models/amenity.model';
import { User, Role, Department } from '../models/user.model';
import { HotelData } from '../models/hotel-data.model';
import { RatePlan, RoomTypeRate } from '../models/rate-plan.model';
import { Policy } from '../models/policy.model';

interface StoreResult {
  ok: boolean;
  errors?: string[];
}

interface GlobalEnv {
  localStorage?: Storage;
  crypto?: Crypto;
}

function createEmptyHotelData(): HotelData {
  const now = new Date();
  return {
    version: '1.0.0',
    dataVersion: 1,
    lastUpdated: now,
    exportedBy: 'system',
    exportedAt: now,

    hotel: {
      id: genId(),
      code: 'HOTEL',
      name: '',
      description: '',
      status: 'active',
      createdAt: now,
      updatedAt: now,
    } as unknown as Hotel,

    roomTypes: [],
    rooms: [],

    ratePlans: [],
    taxes: [],
    taxGroups: [],

    amenities: [],
    amenityGroups: [],

    policies: [],

    departments: [],
    roles: [],
    users: [],

    referenceValidation: {
      requiredReferences: {
        roomTypeIds: [],
        ratePlanIds: [],
        taxIds: [],
        amenityIds: [],
        policyIds: [],
        userIds: [],
        roleIds: [],
        departmentIds: [],
      },
      crossReferences: {
        roomsToRoomTypes: {},
        roomTypesToAmenities: {},
        ratePlansToTaxes: {},
        ratePlansToRoomTypes: {},
        usersToRoles: {},
        usersToDepartments: {},
      },
      orphanedReferences: {
        roomsWithInvalidRoomTypes: [],
        ratePlansWithInvalidTaxes: [],
        usersWithInvalidRoles: [],
      },
    },

    constraints: {
      uniqueConstraints: {
        codes: {
          hotelCode: 'HOTEL',
          roomTypeCodes: [],
          roomNumbers: [],
          ratePlanCodes: [],
          taxCodes: [],
          amenityCodes: [],
          usernames: [],
          roleNames: [],
          departmentCodes: [],
        },
      },
      businessRules: {
        maxRoomTypes: 200,
        maxRooms: 2000,
        maxRatePlans: 500,
        maxTaxes: 200,
        maxAmenities: 500,
        maxUsers: 1000,
        maxRoles: 100,
        maxDepartments: 100,
      },
      validationRules: {
        roomTypesMustHaveRooms: false,
        ratePlansMustHaveTaxes: false,
        usersMustHaveRoles: true,
        deleteReferencedEntitiesPrevented: true,
      },
    },
  } as HotelData;
}

function genId(): EntityId {
  const g = globalThis as unknown as GlobalEnv;
  return (
    g.crypto?.randomUUID?.() ??
    `id_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
  );
}

@Injectable({ providedIn: 'root' })
export class HotelStore {
  // Implement Users CRUD (replaces earlier stubs)
  addUser(u: User): StoreResult {
    (u as User).id ||= genId();
    // Unique username (case-insensitive)
    if (!u.username || this.existsUsername(u.username)) {
      return { ok: false, errors: ['Username must be unique.'] };
    }
    // Validate references
    if ((u.roles ?? []).some((ur) => !this.existsRole(ur.roleId))) {
      return { ok: false, errors: ['User references an invalid role.'] };
    }
    if (u.departmentId && !this.existsDepartment(u.departmentId)) {
      return { ok: false, errors: ['User references an invalid department.'] };
    }
    return this.commit((s) => ({ ...s, users: [...s.users, u] }));
  }
  updateUser(id: EntityId, patch: Partial<User>): StoreResult {
    if (patch.username && this.existsUsername(patch.username, id)) {
      return { ok: false, errors: ['Username must be unique.'] };
    }
    if (patch.roles && patch.roles.some((ur) => !this.existsRole(ur.roleId))) {
      return { ok: false, errors: ['User references an invalid role.'] };
    }
    if (patch.departmentId && !this.existsDepartment(patch.departmentId)) {
      return { ok: false, errors: ['User references an invalid department.'] };
    }
    return this.commit((s) => ({
      ...s,
      users: s.users.map((x) =>
        x.id === id ? { ...x, ...patch, updatedAt: new Date() } : x,
      ),
    }));
  }
  removeUser(id: EntityId): StoreResult {
    return this.commit((s) => ({
      ...s,
      users: s.users.filter((x) => x.id !== id),
    }));
  }

  private readonly STORAGE_KEY = 'hotel-admin-hotel-data';

  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  // State
  private _state = signal<HotelData>(this.load());
  state = computed(() => this._state());

  // Derived collections
  hotel = computed(() => this._state().hotel);
  roomTypes = computed(() => this._state().roomTypes);
  rooms = computed(() => this._state().rooms);
  ratePlans = computed(() => this._state().ratePlans);
  taxes = computed(() => this._state().taxes);
  amenities = computed(() => this._state().amenities);
  policies = computed(() => this._state().policies);
  users = computed(() => this._state().users);
  roles = computed(() => this._state().roles);
  departments = computed(() => this._state().departments);

  // Persist on change (browser only)
  private persistEffect = effect(() => {
    const snapshot = this._state();
    if (this.isBrowser) {
      try {
        const ls = (globalThis as unknown as GlobalEnv).localStorage;
        ls?.setItem(this.STORAGE_KEY, JSON.stringify(snapshot));
      } catch {
        // ignore
      }
    }
  });

  // ------------- Public API -------------
  getSnapshot(): HotelData {
    return this._state();
  }

  // Validate arbitrary data without modifying state
  validateData(data: HotelData): StoreResult {
    // Normalize same as load/postLoad
    const normalized = this.postLoad({ ...(data as HotelData) });
    return this.validate(normalized);
  }

  validateCurrent(): StoreResult {
    return this.validate(this._state());
  }

  resetAll(): void {
    this._state.set(createEmptyHotelData());
  }

  replaceAll(data: HotelData): StoreResult {
    // Normalize incoming before validation/commit to avoid undefined arrays, etc.
    const normalized = this.postLoad({ ...(data as HotelData) });
    const validation = this.validate(normalized);
    if (!validation.ok) return validation;
    this._state.set({ ...normalized, lastUpdated: new Date() });
    return { ok: true };
  }

  // Hotel
  setHotel(hotel: Hotel): StoreResult {
    return this.commit((s) => ({ ...s, hotel, lastUpdated: new Date() }));
  }

  // Room Types
  addRoomType(rt: RoomType): StoreResult {
    (rt as RoomType).id ||= genId();
    return this.commit((s) => ({ ...s, roomTypes: [...s.roomTypes, rt] }));
  }
  updateRoomType(id: EntityId, patch: Partial<RoomType>): StoreResult {
    return this.commit((s) => ({
      ...s,
      roomTypes: s.roomTypes.map((r) =>
        r.id === id ? { ...r, ...patch, updatedAt: new Date() } : r,
      ),
    }));
  }
  removeRoomType(id: EntityId): StoreResult {
    const refs = this.findRoomTypeReferences(id);
    if (refs.rooms.length || refs.ratePlans.length) {
      return {
        ok: false,
        errors: [
          `Cannot delete Room Type in use. Referenced by ${refs.rooms.length} room(s) and ${refs.ratePlans.length} rate plan(s).`,
        ],
      };
    }
    return this.commit((s) => ({
      ...s,
      roomTypes: s.roomTypes.filter((r) => r.id !== id),
    }));
  }

  // Rooms
  addRoom(room: Room): StoreResult {
    if (!this.existsRoomType(room.roomTypeId)) {
      return { ok: false, errors: ['Invalid roomTypeId.'] };
    }
    // unique room number
    if (!room.roomNumber || this.existsRoomNumber(room.roomNumber)) {
      return { ok: false, errors: ['Room number must be unique.'] };
    }
    (room as Room).id ||= genId();
    return this.commit((s) => ({ ...s, rooms: [...s.rooms, room] }));
  }
  updateRoom(id: EntityId, patch: Partial<Room>): StoreResult {
    if (patch.roomTypeId && !this.existsRoomType(patch.roomTypeId)) {
      return { ok: false, errors: ['Invalid roomTypeId.'] };
    }
    if (patch.roomNumber && this.existsRoomNumber(patch.roomNumber, id)) {
      return { ok: false, errors: ['Room number must be unique.'] };
    }
    return this.commit((s) => ({
      ...s,
      rooms: s.rooms.map((r) =>
        r.id === id ? { ...r, ...patch, updatedAt: new Date() } : r,
      ),
    }));
  }
  removeRoom(id: EntityId): StoreResult {
    return this.commit((s) => ({
      ...s,
      rooms: s.rooms.filter((r) => r.id !== id),
    }));
  }

  // Rate Plans
  addRatePlan(rp: RatePlan): StoreResult {
    (rp as RatePlan).id ||= genId();
    if (
      rp.rates?.some((rr: RoomTypeRate) => !this.existsRoomType(rr.roomTypeId))
    ) {
      return {
        ok: false,
        errors: ['Rate plan references an invalid room type.'],
      };
    }
    return this.commit((s) => ({ ...s, ratePlans: [...s.ratePlans, rp] }));
  }
  updateRatePlan(id: EntityId, patch: Partial<RatePlan>): StoreResult {
    if (
      patch.rates &&
      patch.rates.some((rr) => !this.existsRoomType(rr.roomTypeId))
    ) {
      return {
        ok: false,
        errors: ['Rate plan references an invalid room type.'],
      };
    }
    return this.commit((s) => ({
      ...s,
      ratePlans: s.ratePlans.map((r) =>
        r.id === id ? { ...r, ...patch, updatedAt: new Date() } : r,
      ),
    }));
  }
  removeRatePlan(id: EntityId): StoreResult {
    return this.commit((s) => ({
      ...s,
      ratePlans: s.ratePlans.filter((r) => r.id !== id),
    }));
  }

  // Taxes
  addTax(t: Tax): StoreResult {
    (t as Tax).id ||= genId();
    return this.commit((s) => ({ ...s, taxes: [...s.taxes, t] }));
  }
  updateTax(id: EntityId, patch: Partial<Tax>): StoreResult {
    return this.commit((s) => ({
      ...s,
      taxes: s.taxes.map((x) =>
        x.id === id ? { ...x, ...patch, updatedAt: new Date() } : x,
      ),
    }));
  }
  removeTax(id: EntityId): StoreResult {
    const inUse = this._state().ratePlans.some((rp) =>
      (rp.applicableTaxIds ?? []).includes(id),
    );
    if (inUse)
      return {
        ok: false,
        errors: ['Cannot delete tax in use by a rate plan.'],
      };
    return this.commit((s) => ({
      ...s,
      taxes: s.taxes.filter((x) => x.id !== id),
    }));
  }

  // Amenities
  addAmenity(a: Amenity): StoreResult {
    (a as Amenity).id ||= genId();
    return this.commit((s) => ({ ...s, amenities: [...s.amenities, a] }));
  }
  updateAmenity(id: EntityId, patch: Partial<Amenity>): StoreResult {
    return this.commit((s) => ({
      ...s,
      amenities: s.amenities.map((x) =>
        x.id === id ? { ...x, ...patch, updatedAt: new Date() } : x,
      ),
    }));
  }
  removeAmenity(id: EntityId): StoreResult {
    const inUse = this._state().roomTypes.some((rt) =>
      (rt.amenityIds ?? []).includes(id),
    );
    if (inUse)
      return {
        ok: false,
        errors: ['Cannot delete amenity in use by a room type.'],
      };
    return this.commit((s) => ({
      ...s,
      amenities: s.amenities.filter((x) => x.id !== id),
    }));
  }

  // Policies
  addPolicy(p: Policy): StoreResult {
    (p as Policy).id ||= genId();
    return this.commit((s) => ({ ...s, policies: [...s.policies, p] }));
  }
  updatePolicy(id: EntityId, patch: Partial<Policy>): StoreResult {
    return this.commit((s) => ({
      ...s,
      policies: s.policies.map((x) =>
        x.id === id ? { ...x, ...patch, updatedAt: new Date() } : x,
      ),
    }));
  }
  removePolicy(id: EntityId): StoreResult {
    return this.commit((s) => ({
      ...s,
      policies: s.policies.filter((x) => x.id !== id),
    }));
  }

  // Users/Access
  addRole(r: Role): StoreResult {
    (r as Role).id ||= genId();
    // Enforce unique role name (case-insensitive)
    if (!r.name || this.existsRoleName(r.name)) {
      return { ok: false, errors: ['Role name must be unique.'] };
    }
    return this.commit((s) => ({ ...s, roles: [...s.roles, r] }));
  }
  updateRole(id: EntityId, patch: Partial<Role>): StoreResult {
    if (patch.name && this.existsRoleName(patch.name, id)) {
      return { ok: false, errors: ['Role name must be unique.'] };
    }
    return this.commit((s) => ({
      ...s,
      roles: s.roles.map((x) =>
        x.id === id ? { ...x, ...patch, updatedAt: new Date() } : x,
      ),
    }));
  }
  removeRole(id: EntityId): StoreResult {
    const inUse = this._state().users.some((u) =>
      (u.roles ?? []).some((ur) => ur.roleId === id),
    );
    if (inUse)
      return {
        ok: false,
        errors: ['Cannot delete role in use by a user.'],
      };
    return this.commit((s) => ({
      ...s,
      roles: s.roles.filter((x) => x.id !== id),
    }));
  }
  addDepartment(d: Department): StoreResult {
    (d as Department).id ||= genId();
    // Enforce unique department code (case-insensitive)
    if (!d.code || this.existsDepartmentCode(d.code)) {
      return { ok: false, errors: ['Department code must be unique.'] };
    }
    return this.commit((s) => ({ ...s, departments: [...s.departments, d] }));
  }
  updateDepartment(id: EntityId, patch: Partial<Department>): StoreResult {
    if (patch.code && this.existsDepartmentCode(patch.code, id)) {
      return { ok: false, errors: ['Department code must be unique.'] };
    }
    return this.commit((s) => ({
      ...s,
      departments: s.departments.map((x) =>
        x.id === id ? { ...x, ...patch, updatedAt: new Date() } : x,
      ),
    }));
  }
  removeDepartment(id: EntityId): StoreResult {
    const inUse = this._state().users.some((u) => u.departmentId === id);
    if (inUse)
      return {
        ok: false,
        errors: ['Cannot delete department in use by a user.'],
      };
    return this.commit((s) => ({
      ...s,
      departments: s.departments.filter((x) => x.id !== id),
    }));
  }

  // Import/Export
  export(): string {
    return JSON.stringify(this._state(), null, 2);
  }
  import(json: string): StoreResult {
    try {
      const parsed = JSON.parse(json) as HotelData;
      return this.replaceAll(parsed);
    } catch {
      return { ok: false, errors: ['Invalid JSON'] };
    }
  }

  // ------------- Internals -------------
  private load(): HotelData {
    if (this.isBrowser) {
      try {
        const ls = (globalThis as unknown as GlobalEnv).localStorage;
        const raw = ls?.getItem(this.STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw) as HotelData;
          return this.postLoad(parsed);
        }
      } catch {
        // ignore
      }
    }
    return createEmptyHotelData();
  }

  private postLoad(data: HotelData): HotelData {
    // Ensure required arrays exist
    const fix = {
      roomTypes: data.roomTypes ?? [],
      rooms: data.rooms ?? [],
      ratePlans: data.ratePlans ?? [],
      taxes: data.taxes ?? [],
      amenities: data.amenities ?? [],
      policies: data.policies ?? [],
      users: data.users ?? [],
      roles: data.roles ?? [],
      departments: data.departments ?? [],
    } as Partial<HotelData>;
    const merged = { ...data, ...fix } as HotelData;
    return this.rebuildReferences(merged);
  }

  private commit(mutator: (s: HotelData) => HotelData): StoreResult {
    const prev = this._state();
    const next = this.rebuildReferences(mutator({ ...prev }));

    // Optimistic update with validation and rollback on error
    const validation = this.validate(next);
    if (!validation.ok) {
      return validation; // no state change
    }
    this._state.set({ ...next, lastUpdated: new Date() });
    return { ok: true };
  }

  private validate(s: HotelData): StoreResult {
    const errors: string[] = [];

    // Cross-entity constraints
    if (s.hotel && typeof s.hotel.totalRooms === 'number') {
      const configuredRooms = s.rooms?.length ?? 0;
      if (s.hotel.totalRooms < configuredRooms) {
        errors.push(
          `Hotel totalRooms (${s.hotel.totalRooms}) is less than configured rooms (${configuredRooms}).`,
        );
      }
    }

    // Uniqueness within collections (case-insensitive)
    const seenRoleNames = new Set<string>();
    for (const r of s.roles) {
      const key = (r.name ?? '').trim().toLowerCase();
      if (!key) continue;
      if (seenRoleNames.has(key)) errors.push(`Duplicate role name: ${r.name}`);
      else seenRoleNames.add(key);
    }
    const seenDeptCodes = new Set<string>();
    for (const d of s.departments) {
      const key = (d.code ?? '').trim().toLowerCase();
      if (!key) continue;
      if (seenDeptCodes.has(key))
        errors.push(`Duplicate department code: ${d.code}`);
      else seenDeptCodes.add(key);
    }

    // Referential integrity
    const roomTypeIds = new Set(s.roomTypes.map((x) => x.id));
    const taxIds = new Set(s.taxes.map((x) => x.id));
    const roleIds = new Set(s.roles.map((x) => x.id));
    const deptIds = new Set(s.departments.map((x) => x.id));

    for (const room of s.rooms) {
      if (!roomTypeIds.has(room.roomTypeId)) {
        errors.push(
          `Room ${room.roomNumber || room.id} has invalid roomTypeId`,
        );
      }
    }

    for (const rp of s.ratePlans) {
      if ((rp.rates ?? []).some((rr) => !roomTypeIds.has(rr.roomTypeId))) {
        errors.push(
          `Rate plan ${rp.code || rp.name || rp.id} references invalid room type`,
        );
      }
      if ((rp.applicableTaxIds ?? []).some((id) => !taxIds.has(id))) {
        errors.push(
          `Rate plan ${rp.code || rp.name || rp.id} references invalid tax`,
        );
      }
    }

    for (const u of s.users) {
      if ((u.roles ?? []).some((ur) => !roleIds.has(ur.roleId))) {
        errors.push(`User ${u.username || u.id} references invalid role`);
      }
      if (u.departmentId && !deptIds.has(u.departmentId)) {
        errors.push(`User ${u.username || u.id} references invalid department`);
      }
    }

    return errors.length ? { ok: false, errors } : { ok: true };
  }

  private rebuildReferences(s: HotelData): HotelData {
    // Recalculate helper maps and orphan lists
    const cross = s.referenceValidation.crossReferences;
    cross.roomsToRoomTypes = Object.fromEntries(
      s.rooms.map((r: Room) => [r.id, r.roomTypeId]),
    );
    cross.roomTypesToAmenities = Object.fromEntries(
      s.roomTypes.map((rt: RoomType) => [rt.id, rt.amenityIds ?? []]),
    );
    cross.ratePlansToRoomTypes = Object.fromEntries(
      s.ratePlans.map((rp: RatePlan) => [
        rp.id,
        Array.from(new Set((rp.rates ?? []).map((rr) => rr.roomTypeId))),
      ]),
    );
    cross.ratePlansToTaxes = Object.fromEntries(
      s.ratePlans.map((rp: RatePlan) => [rp.id, rp.applicableTaxIds ?? []]),
    );
    cross.usersToRoles = Object.fromEntries(
      s.users.map((u: User) => [u.id, (u.roles ?? []).map((ur) => ur.roleId)]),
    );
    cross.usersToDepartments = Object.fromEntries(
      s.users
        .filter((u: User) => !!u.departmentId)
        .map((u: User) => [u.id, u.departmentId as EntityId]),
    );

    const roomTypeIds = new Set(s.roomTypes.map((x) => x.id));
    const taxIds = new Set(s.taxes.map((x) => x.id));
    const roleIds = new Set(s.roles.map((x) => x.id));

    s.referenceValidation.orphanedReferences.roomsWithInvalidRoomTypes = s.rooms
      .filter((r: Room) => !roomTypeIds.has(r.roomTypeId))
      .map((r) => r.id);
    s.referenceValidation.orphanedReferences.ratePlansWithInvalidTaxes =
      s.ratePlans
        .filter((rp: RatePlan) =>
          (rp.applicableTaxIds ?? []).some((id: EntityId) => !taxIds.has(id)),
        )
        .map((rp) => rp.id);
    s.referenceValidation.orphanedReferences.usersWithInvalidRoles = s.users
      .filter((u: User) =>
        (u.roles ?? []).some((ur) => !roleIds.has(ur.roleId)),
      )
      .map((u) => u.id);

    // Update unique constraints snapshots
    s.constraints.uniqueConstraints.codes.roomTypeCodes = s.roomTypes
      .map((x: RoomType) => x.code)
      .filter(Boolean);
    s.constraints.uniqueConstraints.codes.roomNumbers = s.rooms
      .map((x: Room) => x.roomNumber)
      .filter(Boolean);
    s.constraints.uniqueConstraints.codes.ratePlanCodes = s.ratePlans
      .map((x: RatePlan) => x.code)
      .filter(Boolean);
    s.constraints.uniqueConstraints.codes.taxCodes = s.taxes
      .map((x: Tax) => x.code)
      .filter(Boolean);
    s.constraints.uniqueConstraints.codes.amenityCodes = s.amenities
      .map((x: Amenity) => x.code)
      .filter(Boolean);
    s.constraints.uniqueConstraints.codes.usernames = s.users
      .map((x: User) => x.username)
      .filter(Boolean);
    s.constraints.uniqueConstraints.codes.roleNames = s.roles
      .map((x: Role) => x.name)
      .filter(Boolean);
    s.constraints.uniqueConstraints.codes.departmentCodes = s.departments
      .map((x: Department) => x.code)
      .filter(Boolean);

    return s;
  }

  // Helpers
  private existsRoomType(id: EntityId): boolean {
    return this._state().roomTypes.some((x) => x.id === id);
  }
  private existsRole(id: EntityId): boolean {
    return this._state().roles.some((x) => x.id === id);
  }
  private existsDepartment(id: EntityId): boolean {
    return this._state().departments.some((x) => x.id === id);
  }
  private existsRoleName(name: string, excludeId?: EntityId): boolean {
    const key = (name ?? '').trim().toLowerCase();
    if (!key) return false;
    return this._state().roles.some(
      (r) => r.id !== excludeId && (r.name ?? '').trim().toLowerCase() === key,
    );
  }
  private existsDepartmentCode(code: string, excludeId?: EntityId): boolean {
    const key = (code ?? '').trim().toLowerCase();
    if (!key) return false;
    return this._state().departments.some(
      (d) => d.id !== excludeId && (d.code ?? '').trim().toLowerCase() === key,
    );
  }
  private existsRoomNumber(roomNumber: string, excludeId?: EntityId): boolean {
    const key = (roomNumber ?? '').toString().trim().toLowerCase();
    if (!key) return false;
    return this._state().rooms.some(
      (r) =>
        r.id !== excludeId &&
        (r.roomNumber ?? '').toString().trim().toLowerCase() === key,
    );
  }
  private existsUsername(username: string, excludeId?: EntityId): boolean {
    const key = (username ?? '').toString().trim().toLowerCase();
    if (!key) return false;
    return this._state().users.some(
      (u) =>
        u.id !== excludeId &&
        (u.username ?? '').toString().trim().toLowerCase() === key,
    );
  }
  private findRoomTypeReferences(id: EntityId): {
    rooms: Room[];
    ratePlans: RatePlan[];
  } {
    const s = this._state();
    const rooms = s.rooms.filter((r: Room) => r.roomTypeId === id);
    const ratePlans = s.ratePlans.filter((rp: RatePlan) =>
      (rp.rates ?? []).some((rr) => rr.roomTypeId === id),
    );
    return { rooms, ratePlans };
  }
}
