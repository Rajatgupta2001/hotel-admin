/**
 * Amenity Models
 */

export interface Amenity {
  id: number;
  hotelid: number;
  title: string;
  shortname: string;
  imagename?: string;
  description: string;
  icon?: string;
  createdby: number;
  status: string;
  sortorder?: number;
  modifiedby: number;
  showonhousekepping?: number;
}

export interface CreateAmenity {
  hotelid: number;
  title: string;
  shortname: string;
  imagename?: string;
  description: string;
  icon?: string;
  status: string;
  sortorder?: number;
  showonhousekepping?: number;
  createdby?: number;
  modifiedby?: number;
}

export interface UpdateAmenity {
  title?: string;
  shortname?: string;
  imagename?: string;
  description?: string;
  icon?: string;
  status?: string;
  sortorder?: number;
  showonhousekepping?: number;
  modifiedby?: number;
}
