/**
 * HotelCustomSettings Model
 * Database table: hotelCustomSettings
 */
export interface HotelCustomSettings {
  id: number; // INTEGER
  hotelid: number; // Integer
  key?: string; // String(50)
  value?: string; // String(4000)
  createdby: number; // Integer
  modifiedby?: number; // Integer
  status?: string; // String(1)
}

export interface CreateHotelCustomSettings {
  hotelid: number;
  key?: string;
  value?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}

export interface UpdateHotelCustomSettings {
  hotelid?: number;
  key?: string;
  value?: string;
  modifiedby?: number;
  status?: string;
}
