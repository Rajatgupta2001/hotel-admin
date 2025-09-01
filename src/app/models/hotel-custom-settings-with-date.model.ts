/**
 * HotelCustomSettingsWithDate Model
 * Database table: hotelCustomSettingsWithDate
 */
export interface HotelCustomSettingsWithDate {
  id: number; // INTEGER
  hotelid?: number; // Integer
  key?: string; // String(50)
  value?: string; // String(4000)
  value1?: number; // Integer
  value2?: number; // Integer
  value3?: string; // String(500)
  value4?: string; // String(500)
  startdate: Date; // DateTime
  enddate: Date; // DateTime
  createdby: number; // Integer
  modifiedby?: number; // Integer
  status?: string; // default='A'
}

export interface CreateHotelCustomSettingsWithDate {
  hotelid?: number;
  key?: string;
  value?: string;
  value1?: number;
  value2?: number;
  value3?: string;
  value4?: string;
  startdate: Date;
  enddate: Date;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}

export interface UpdateHotelCustomSettingsWithDate {
  hotelid?: number;
  key?: string;
  value?: string;
  value1?: number;
  value2?: number;
  value3?: string;
  value4?: string;
  startdate?: Date;
  enddate?: Date;
  modifiedby?: number;
  status?: string;
}
