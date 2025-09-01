/**
 * Policy Models
 */

export interface CancellationPolicy {
  id: number;
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  isseason?: number;
  canpolicyid?: number;
  rmtypeid?: number;
  createdby?: number;
  modifiedby?: number;
}

export interface BookingPolicy {
  id: any;
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  isseason?: number;
  bookpolicyid?: number;
  rmtypeid?: number;
  createdby?: number;
  modifiedby?: number;
}

export interface CreateCancellationPolicy {
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  isseason?: number;
  canpolicyid?: number;
  rmtypeid?: number;
  createdby?: number;
  modifiedby?: number;
}

export interface CreateBookingPolicy {
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  isseason?: number;
  bookpolicyid?: number;
  rmtypeid?: number;
  createdby?: number;
  modifiedby?: number;
}

export interface UpdateCancellationPolicy {
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  isseason?: number;
  canpolicyid?: number;
  rmtypeid?: number;
  modifiedby?: number;
}

export interface UpdateBookingPolicy {
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  isseason?: number;
  bookpolicyid?: number;
  rmtypeid?: number;
  modifiedby?: number;
}
