/**
 * Hotel Models
 * Based on the provided hotel management system models
 */

export interface Hotel {
  id: number;
  compid: number;
  hotelname?: string;
  catid?: number;
  logoimage?: string;
  description?: string;
  noofrooms?: number;
  services?: string;
  website?: string;
  status: string;
  hotelemailid?: string;
  billingcurrency?: string;
  longitude?: number;
  latitude?: number;
  createdby: number;
  modifiedby: number;
}

export interface CreateHotel {
  compid: number;
  hotelname?: string;
  catid?: number;
  logoimage?: string;
  description?: string;
  noofrooms?: number;
  services?: string;
  website?: string;
  status: string;
  hotelemailid?: string;
  billingcurrency?: string;
  longitude?: number;
  latitude?: number;
  createdby?: number;
  modifiedby?: number;
}

export interface UpdateHotel {
  hotelname?: string;
  catid?: number;
  logoimage?: string;
  description?: string;
  noofrooms?: number;
  services?: string;
  website?: string;
  status?: string;
  hotelemailid?: string;
  billingcurrency?: string;
  longitude?: number;
  latitude?: number;
  modifiedby?: number;
}
