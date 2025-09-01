import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { 
  IRoomTypes, 
  ICreateRoomTypes, 
  IUpdateRoomTypes,
  IAmenities,
  ModelUtils,
  ModelStatus,
  IPaginatedResponse,
  IApiResponse
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class RoomTypesService {
  private apiUrl = '/api/room-types'; // Replace with your actual API endpoint
  private http = inject(HttpClient);

  /**
   * Get all room types for a hotel
   */
  getRoomTypes(hotelId?: number): Observable<IApiResponse<IRoomTypes[]>> {
    const url = hotelId ? `${this.apiUrl}?hotelId=${hotelId}` : this.apiUrl;
    return this.http.get<IApiResponse<IRoomTypes[]>>(url);
  }

  /**
   * Get paginated room types
   */
  getRoomTypesPaginated(page: number, pageSize: number, hotelId?: number): Observable<IPaginatedResponse<IRoomTypes>> {
    const params = {
      page: page.toString(),
      pageSize: pageSize.toString(),
      ...(hotelId && { hotelId: hotelId.toString() })
    };
    
    return this.http.get<IPaginatedResponse<IRoomTypes>>(`${this.apiUrl}/paginated`, { params });
  }

  /**
   * Get a single room type by ID
   */
  getRoomType(id: number): Observable<IApiResponse<IRoomTypes>> {
    return this.http.get<IApiResponse<IRoomTypes>>(`${this.apiUrl}/${id}`);
  }

  /**
   * Create a new room type
   */
  createRoomType(roomType: ICreateRoomTypes): Observable<IApiResponse<IRoomTypes>> {
    // Clean the data before sending
    const cleanData = ModelUtils.cleanModelData(roomType);
    
    // Add audit fields
    const roomTypeWithAudit = ModelUtils.createWithAudit(cleanData, 1); // Replace 1 with actual user ID
    
    return this.http.post<IApiResponse<IRoomTypes>>(this.apiUrl, roomTypeWithAudit);
  }

  /**
   * Update an existing room type
   */
  updateRoomType(id: number, roomType: IUpdateRoomTypes): Observable<IApiResponse<IRoomTypes>> {
    // Clean the data before sending
    const cleanData = ModelUtils.cleanModelData(roomType);
    
    return this.http.put<IApiResponse<IRoomTypes>>(`${this.apiUrl}/${id}`, cleanData);
  }

  /**
   * Delete a room type (soft delete by updating status)
   */
  deleteRoomType(id: number): Observable<IApiResponse<boolean>> {
    const updateData: IUpdateRoomTypes = {
      status: 'DE' as ModelStatus,
      modifiedby: 1 // Replace with actual user ID
    };
    
    return this.http.patch<IApiResponse<boolean>>(`${this.apiUrl}/${id}`, updateData);
  }

  /**
   * Get active room types only
   */
  getActiveRoomTypes(hotelId?: number): Observable<IApiResponse<IRoomTypes[]>> {
    const params = {
      status: 'AC',
      ...(hotelId && { hotelId: hotelId.toString() })
    };
    
    return this.http.get<IApiResponse<IRoomTypes[]>>(this.apiUrl, { params });
  }

  /**
   * Search room types by title
   */
  searchRoomTypes(query: string, hotelId?: number): Observable<IApiResponse<IRoomTypes[]>> {
    const params = {
      search: query,
      ...(hotelId && { hotelId: hotelId.toString() })
    };
    
    return this.http.get<IApiResponse<IRoomTypes[]>>(`${this.apiUrl}/search`, { params });
  }

  /**
   * Get room types with their amenities
   */
  getRoomTypesWithAmenities(hotelId?: number): Observable<IApiResponse<(IRoomTypes & { amenities: IAmenities[] })[]>> {
    const params = {
      include: 'amenities',
      ...(hotelId && { hotelId: hotelId.toString() })
    };
    
    return this.http.get<IApiResponse<(IRoomTypes & { amenities: IAmenities[] })[]>>(this.apiUrl, { params });
  }

  /**
   * Bulk update room types
   */
  bulkUpdateRoomTypes(updates: { id: number; data: IUpdateRoomTypes }[]): Observable<IApiResponse<IRoomTypes[]>> {
    // Clean each update data
    const cleanUpdates = updates.map(update => ({
      id: update.id,
      data: ModelUtils.cleanModelData(update.data)
    }));
    
    return this.http.patch<IApiResponse<IRoomTypes[]>>(`${this.apiUrl}/bulk`, cleanUpdates);
  }

  /**
   * Validate room type data before saving
   */
  validateRoomType(roomType: ICreateRoomTypes | IUpdateRoomTypes): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Check required fields for creation
    if ('title' in roomType && !roomType.title) {
      errors.push('Room type title is required');
    }

    if ('hotelid' in roomType && !roomType.hotelid) {
      errors.push('Hotel ID is required');
    }

    // Validate occupancy values
    if (roomType.stdoccupancy && roomType.stdoccupancy < 1) {
      errors.push('Standard occupancy must be at least 1');
    }

    if (roomType.higheroccupancy && roomType.stdoccupancy && 
        roomType.higheroccupancy < roomType.stdoccupancy) {
      errors.push('Maximum occupancy cannot be less than standard occupancy');
    }

    // Validate room count
    if (roomType.noofrooms && roomType.noofrooms < 0) {
      errors.push('Number of rooms cannot be negative');
    }

    // Validate overbooking settings
    if (roomType.isoverbookingalwd === 1) {
      if (!roomType.overbookingvalue || roomType.overbookingvalue <= 0) {
        errors.push('Overbooking value must be greater than 0 when overbooking is allowed');
      }
      
      if (!roomType.overbookingtype) {
        errors.push('Overbooking type is required when overbooking is allowed');
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Get room type statistics
   */
  getRoomTypeStatistics(hotelId?: number): Observable<IApiResponse<{
    total: number;
    active: number;
    inactive: number;
    totalRooms: number;
    averageOccupancy: number;
  }>> {
    const params: Record<string, string> = {};
    if (hotelId) {
      params['hotelId'] = hotelId.toString();
    }
    
    return this.http.get<IApiResponse<{
      total: number;
      active: number;
      inactive: number;
      totalRooms: number;
      averageOccupancy: number;
    }>>(`${this.apiUrl}/statistics`, { params });
  }

  /**
   * Helper method to convert legacy data to new model format
   * @param legacyData - Legacy data object with unknown property types
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  convertLegacyRoomType(legacyData: Record<string, any>): IRoomTypes {
    return {
      id: legacyData['id'] as number,
      hotelid: (legacyData['hotelId'] || legacyData['hotelid']) as number,
      title: (legacyData['title'] || legacyData['roomTypeName']) as string,
      accronym: (legacyData['accronym'] || legacyData['shortName']) as string,
      noofrooms: (legacyData['noofrooms'] || legacyData['numberOfRooms']) as number,
      image: legacyData['image'] as string,
      description: legacyData['description'] as string,
      stdoccupancy: (legacyData['stdoccupancy'] || legacyData['standardOccupancy']) as number,
      higheroccupancy: (legacyData['higheroccupancy'] || legacyData['maxOccupancy']) as number,
      maxadult: (legacyData['maxadult'] || legacyData['maxAdults']) as number,
      maxchild: (legacyData['maxchild'] || legacyData['maxChildren']) as number,
      isbedalwd: (legacyData['isbedalwd'] || (legacyData['extraBedAllowed'] ? 1 : 0)) as number,
      xtralwdbeds: (legacyData['xtralwdbeds'] || legacyData['extraBeds']) as number,
      isoverbookingalwd: (legacyData['isoverbookingalwd'] || (legacyData['overbookingAllowed'] ? 1 : 0)) as number,
      status: (legacyData['status'] || legacyData['active'] || 'active') as string,
      shortorder: (legacyData['shortorder'] || legacyData['sortOrder'] || 0) as number,
      modifiedon: new Date(legacyData['modifiedon'] || legacyData['lastModified'] || new Date()),
      modifiedby: (legacyData['modifiedby'] || legacyData['lastModifiedBy'] || 1) as number,
      createdon: new Date(legacyData['createdon'] || legacyData['createdAt'] || new Date()),
      createdby: (legacyData['createdby'] || legacyData['createdBy'] || 1) as number,
      overbookingvalue: (legacyData['overbookingvalue'] || legacyData['overbookingCount'] || 0) as number,
      overbookingtype: (legacyData['overbookingtype'] || legacyData['overbookingCountType'] || 'percentage') as string,
      taxapplicableon: (legacyData['taxapplicableon'] || 'room') as string,
      minwebrsvallowed: (legacyData['minwebrsvallowed'] || 1) as number,
      minweboccu: (legacyData['minweboccu'] || 1) as number,
      maxweboccu: (legacyData['maxweboccu'] || 8) as number,
      publishonweb: (legacyData['publishonweb'] || 1) as number,
      type: (legacyData['type'] || 'standard') as string,
      isderived: (legacyData['isderived'] || 0) as number
    };
  }
}
