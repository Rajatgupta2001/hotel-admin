/**
 * Rate Plans Model
 */
export interface RatePlan {
  id: number;
  code?: string;
  title?: string;
  occurancy?: string;
  billtype?: string;
  rate?: number;
  minamount?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

export interface CreateRatePlan {
  code?: string;
  title?: string;
  occurancy?: string;
  billtype?: string;
  rate?: number;
  minamount?: number;
  status?: string;
  createdby?: number;
}

export interface UpdateRatePlan {
  code?: string;
  title?: string;
  occurancy?: string;
  billtype?: string;
  rate?: number;
  minamount?: number;
  status?: string;
  modifiedby?: number;
}

export interface Policy {
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

export interface CreatePolicy {
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  isseason?: number;
  canpolicyid?: number;
  rmtypeid?: number;
  createdby?: number;
}

export interface UpdatePolicy {
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  isseason?: number;
  canpolicyid?: number;
  rmtypeid?: number;
  modifiedby?: number;
}
