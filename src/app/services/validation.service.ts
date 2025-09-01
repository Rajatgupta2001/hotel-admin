import { Injectable } from '@angular/core';
import { z } from 'zod';

// Primitive/utility schemas
const id = z.number().int().nonnegative();
const nonEmpty = z.string().min(1);
const isoDateString = z.string().refine((s) => !Number.isNaN(Date.parse(s)), {
  message: 'Invalid ISO date string',
});

// Hotel schema (runtime only)
const HotelSchema = z.object({
  id: id,
  compid: id,
  hotelname: z.string().optional(),
  catid: z.number().int().optional(),
  logoimage: z.string().optional(),
  description: z.string().optional(),
  noofrooms: z.number().int().optional(),
  services: z.string().optional(),
  website: z.string().url().optional(),
  status: nonEmpty,
  hotelemailid: z.string().email().optional(),
  billingcurrency: z.string().optional(),
  longitude: z.number().optional(),
  latitude: z.number().optional(),
  createdby: id,
  modifiedby: id,
});

// RoomType schema
const RoomTypeSchema = z.object({
  id: id,
  hotelid: id,
  title: nonEmpty,
  accronym: nonEmpty,
  noofrooms: z.number().int().nonnegative(),
  image: z.string(),
  description: z.string(),
  imagename: z.string().optional(),
  isoverbookingalwd: z.number().int(),
  overbookingvalue: z.number(),
  overbookingtype: nonEmpty,
  isgenderbase: z.number().int(),
  gender: z.number().int().optional(),
  stdoccupancy: z.number().int(),
  higheroccupancy: z.number().int(),
  maxadult: z.number().int().optional(),
  maxchild: z.number().int().optional(),
  isbedalwd: z.number().int(),
  xtralwdbeds: z.number().int(),
  taxapplicableon: nonEmpty,
  shortorder: z.number().int().optional(),
  createdby: id,
  status: nonEmpty,
  modifiedby: id,
  publishonweb: z.number().int().optional(),
  accountcodeid: z.number().int().optional(),
});

// Room schema
const RoomSchema = z.object({
  id: id,
  hotelid: id,
  floorid: z.number().int().optional(),
  blockid: z.number().int().optional(),
  rmtypeid: id,
  rmnameorno: nonEmpty,
  roomcode: nonEmpty,
  description: z.string(),
  createdby: id,
  sortorder: z.number().int().optional(),
  status: z.any(),
  modifiedby: z.number().int().optional(),
  nacreatedon: isoDateString.optional(),
  deletedon: isoDateString.optional(),
  hoteldeletedon: isoDateString.optional(),
  type: z.any().optional(),
});

// RatePlan schema
const RatePlanSchema = z.object({
  id: id,
  code: z.string().optional(),
  title: z.string().optional(),
  occurancy: z.string().optional(),
  billtype: z.string().optional(),
  rate: z.number().optional(),
  minamount: z.number().optional(),
  status: z.string().optional(),
  createdby: z.number().int().optional(),
  modifiedby: z.number().int().optional(),
});

// Tax schema
const TaxSchema = z.object({
  id: id,
  hotelid: id,
  taxname: nonEmpty,
  taxshortname: z.string().optional(),
  taxappliedon: z.string().optional(),
  taxcategory: z.any(),
  taxdepartment: z.any().optional(),
  taxtype: nonEmpty,
  chargetype: nonEmpty,
  tax: z.number().optional(),
  description: z.string(),
  createdby: id,
  status: nonEmpty,
  shortorder: z.number().int().optional(),
  modifiedby: id,
  isslabbased: z.number().int().optional(),
  accountcodeid: z.number().int().optional(),
  istaxable: z.number().int().optional(),
  isalternate: z.number().int().optional(),
  hasrule: z.number().int().optional(),
  rule: z.string().optional(),
  linepost: z.number().int().optional(),
});

// Amenity schema
const AmenitySchema = z.object({
  id: id,
  hotelid: id,
  title: nonEmpty,
  shortname: nonEmpty,
  imagename: z.string().optional(),
  description: z.string(),
  icon: z.string().optional(),
  createdby: id,
  status: nonEmpty,
  sortorder: z.number().int().optional(),
  modifiedby: id,
  showonhousekepping: z.number().int().optional(),
});

// User schema
const UserSchema = z.object({
  id: id,
  compid: z.number().int().optional(),
  hotelid: id,
  bloodgroup: nonEmpty,
  employeeid: nonEmpty,
  departmentid: z.number().int().optional(),
  canlogin: z.number().int().optional(),
  notloginworkarea: z.any().optional(),
  jobtypeid: z.number().int().optional(),
  emergencyno: z.string().optional(),
  identitytype: z.number().int(),
  identityvalue: z.string().optional(),
  doj: isoDateString.optional(),
  shiftfrom: z.string().optional(),
  shiftto: z.string().optional(),
  present: z.number().int(),
  comments: z.string().optional(),
  adminconsoleancper: z.string().optional(),
  housekeeperancper: z.string().optional(),
  frontdeskancper: z.string().optional(),
  createdby: id,
  status: nonEmpty,
  modifiedby: id,
  posaccesscode: z.string().optional(),
  allowedips: z.string().optional(),
  restrictnareport: z.number().int().optional(),
  restrictdtreport: z.number().int().optional(),
  restrictminbooking: z.number().int().optional(),
  alwaysallownareport: z.number().int().optional(),
  restrictrsvediting: z.number().int().optional(),
  isreadonly: z.number().int().optional(),
  issalesperson: z.number().int().optional(),
  ncentitle: z.number().int().optional(),
  restrictgsemail: z.number().int().optional(),
});

// Policies
const CancellationPolicySchema = z.object({
  id: id,
  hotelid: z.number().int().optional(),
  pkgid: z.number().int().optional(),
  validityid: z.number().int().optional(),
  isseason: z.number().int().optional(),
  canpolicyid: z.number().int().optional(),
  rmtypeid: z.number().int().optional(),
  createdby: z.number().int().optional(),
  modifiedby: z.number().int().optional(),
});

const BookingPolicySchema = z.object({
  id: z.any(),
  hotelid: z.number().int().optional(),
  pkgid: z.number().int().optional(),
  validityid: z.number().int().optional(),
  isseason: z.number().int().optional(),
  bookpolicyid: z.number().int().optional(),
  rmtypeid: z.number().int().optional(),
  createdby: z.number().int().optional(),
  modifiedby: z.number().int().optional(),
});

// Main AppData schema
const AppDataSchema = z.object({
  hotel: HotelSchema.nullable(),
  roomTypes: z.array(RoomTypeSchema),
  rooms: z.array(RoomSchema),
  ratePlans: z.array(RatePlanSchema),
  taxes: z.array(TaxSchema),
  policies: z.object({
    cancellation: z.array(CancellationPolicySchema),
    booking: z.array(BookingPolicySchema),
  }),
  amenities: z.array(AmenitySchema),
  users: z.array(UserSchema),
  lastModified: isoDateString,
  version: nonEmpty,
});

export interface ValidationResult {
  success: boolean;
  errors: string[];
}

@Injectable({ providedIn: 'root' })
export class ValidationService {
  validateHotelData(input: unknown): ValidationResult {
    const errors: string[] = [];

    const parsed = AppDataSchema.safeParse(input);
    if (!parsed.success) {
      parsed.error.issues.forEach((i) =>
        errors.push(`${i.path.join('.')}: ${i.message}`),
      );
      return { success: false, errors };
    }
    const data = parsed.data;

    // Cross-field checks
    // 1) Rooms reference valid RoomType ids
    const roomTypeIds = new Set(data.roomTypes.map((rt) => rt.id));
    for (const r of data.rooms) {
      if (!roomTypeIds.has(r.rmtypeid)) {
        errors.push(
          `Room id ${r.id} references missing room type id ${r.rmtypeid}`,
        );
      }
    }

    // 2) Unique codes: room numbers, rate plan codes, tax names, amenity shortnames, usernames
    const ensureUnique = (arr: string[], label: string) => {
      const seen = new Set<string>();
      arr.forEach((v) => {
        const key = v.toLowerCase();
        if (seen.has(key)) errors.push(`Duplicate ${label}: ${v}`);
        seen.add(key);
      });
    };

    ensureUnique(
      data.rooms.map((r) => r.rmnameorno),
      'room name/number',
    );
    ensureUnique(
      data.ratePlans.map((rp) => rp.code || '').filter(Boolean),
      'rate plan code',
    );
    ensureUnique(
      data.taxes.map((t) => t.taxname),
      'tax name',
    );
    ensureUnique(
      data.amenities.map((a) => a.shortname),
      'amenity shortname',
    );
    ensureUnique(
      data.users.map((u) => u.employeeid),
      'employee id',
    );

    // 3) Correct formats: website/email if present on hotel
    if (data.hotel?.website && !/^https?:\/\//i.test(data.hotel.website)) {
      errors.push('Hotel website must start with http:// or https://');
    }
    if (
      data.hotel?.hotelemailid &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.hotel.hotelemailid)
    ) {
      errors.push('Hotel email is not a valid email');
    }

    // 4) RoomType occupancy sanity: higheroccupancy >= stdoccupancy
    for (const rt of data.roomTypes) {
      if (rt.higheroccupancy < rt.stdoccupancy) {
        errors.push(`RoomType ${rt.title} has higheroccupancy < stdoccupancy`);
      }
    }

    return { success: errors.length === 0, errors };
  }
}
