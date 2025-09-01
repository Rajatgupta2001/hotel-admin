/**
 * Rate Plan Models
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
  modifiedby?: number;
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
