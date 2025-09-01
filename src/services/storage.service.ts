import { Injectable } from '@angular/core';
import {
  AppData,
  DEFAULT_APP_DATA,
  Hotel,
  RoomType,
  Room,
  RatePlan,
  Tax,
  CancellationPolicy,
  BookingPolicy,
  Amenity,
  User,
  OutboxOperation,
  OutboxSummary,
} from '../models';

interface PartialPolicies {
  cancellation?: CancellationPolicy[];
  booking?: BookingPolicy[];
}

@Injectable({ providedIn: 'root' })
export class StorageService {
  // Remove the sample data service dependency for now
  
  validateCurrent() {
    throw new Error('Method not implemented.');
  }
  private readonly STORAGE_KEY = 'hotel-admin-data';
  
  // Track if changes are coming from undo/redo to avoid double recording
  private isUndoRedoOperation = false;
  
  // Function to mark the start of an undo/redo operation
  startUndoRedoOperation(): void {
    this.isUndoRedoOperation = true;
  }
  
  // Function to mark the end of an undo/redo operation
  endUndoRedoOperation(): void {
    this.isUndoRedoOperation = false;
  }
  
  // Check if we're in the middle of an undo/redo operation
  isUndoRedo(): boolean {
    return this.isUndoRedoOperation;
  }

  // Load snapshot from localStorage or default
  private load(): AppData {
    const raw = localStorage.getItem(this.STORAGE_KEY);
    if (!raw) return { ...DEFAULT_APP_DATA };
    try {
      const parsed = JSON.parse(raw) as unknown;
      return this.validate(parsed);
    } catch {
      return { ...DEFAULT_APP_DATA };
    }
  }

  // Save snapshot to localStorage
  private save(data: AppData): void {
    try {
      data.lastModified = new Date().toISOString();
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      // Continue gracefully - app should still work in memory-only mode
    }
  }

  // Ensure minimum shape
  private validate(data: unknown): AppData {
    const d = data as Partial<AppData> & { policies?: PartialPolicies };
    
    // Validate hotel is either null or a valid hotel object
    const hotel = d?.hotel;
    const validHotel = (hotel && typeof hotel === 'object' && hotel.constructor === Object) ? hotel : null;
    
    return {
      hotel: validHotel,
      roomTypes: Array.isArray(d?.roomTypes) ? d.roomTypes : [],
      rooms: Array.isArray(d?.rooms) ? d.rooms : [],
      ratePlans: Array.isArray(d?.ratePlans) ? d.ratePlans : [],
      taxes: Array.isArray(d?.taxes) ? d.taxes : [],
      policies: {
        cancellation: Array.isArray(d?.policies?.cancellation)
          ? d.policies!.cancellation!
          : [],
        booking: Array.isArray(d?.policies?.booking)
          ? d.policies!.booking!
          : [],
      },
      amenities: Array.isArray(d?.amenities) ? d.amenities : [],
      users: Array.isArray(d?.users) ? d.users : [],
      outbox: d?.outbox || {
        operations: [],
        lastSyncAttempt: undefined,
        lastSuccessfulSync: undefined,
        summary: {
          totalOperations: 0,
          pendingOperations: 0,
          failedOperations: 0,
          syncedOperations: 0,
        },
      },
      lastModified: d?.lastModified || new Date().toISOString(),
      version: d?.version || '1.0.0',
    } as AppData;
  }

  // Public API (synchronous)
  getSnapshot(): AppData {
    return this.load();
  }

  // Hotel
  getHotel(): Hotel | null | undefined {
    return this.load().hotel;
  }
  setHotel(hotel: Hotel): void {
    const data = this.load();
    if (!hotel['id']) hotel['id'] = data.hotel?.['id'] ?? 1;
    data.hotel = hotel;
    this.save(data);
  }

  // Room Types
  getRoomTypes(): RoomType[] {
    return this.load().roomTypes;
  }
  addRoomType(roomType: RoomType): void {
    const data = this.load();
    roomType['id'] = this.generateId(data.roomTypes);
    data.roomTypes.push(roomType);
    this.save(data);
    
    // Enqueue operation for sync
    this.enqueueOperation('CREATE', 'roomType', roomType['id'], roomType);
  }
  updateRoomType(id: number, updates: Partial<RoomType>): void {
    const data = this.load();
    const idx = data.roomTypes.findIndex((r) => r['id'] === id);
    if (idx !== -1) {
      data.roomTypes[idx] = { ...data.roomTypes[idx], ...updates };
      this.save(data);
      
      // Enqueue operation for sync
      this.enqueueOperation('UPDATE', 'roomType', id, { id, ...updates });
    }
  }
  deleteRoomType(id: number): void {
    const data = this.load();
    data.roomTypes = data.roomTypes.filter((r) => r['id'] !== id);
    this.save(data);
    
    // Enqueue operation for sync
    this.enqueueOperation('DELETE', 'roomType', id, { id });
  }

  // Rooms
  getRooms(): Room[] {
    return this.load().rooms;
  }
  addRoom(room: Room): void {
    const data = this.load();
    room['id'] = this.generateId(data.rooms);
    data.rooms.push(room);
    this.save(data);
    
    // Enqueue operation for sync
    this.enqueueOperation('CREATE', 'room', room['id'], room);
  }
  updateRoom(id: number, updates: Partial<Room>): void {
    const data = this.load();
    const idx = data.rooms.findIndex((r) => r['id'] === id);
    if (idx !== -1) {
      data.rooms[idx] = { ...data.rooms[idx], ...updates };
      this.save(data);
      
      // Enqueue operation for sync
      this.enqueueOperation('UPDATE', 'room', id, { id, ...updates });
    }
  }
  deleteRoom(id: number): void {
    const data = this.load();
    data.rooms = data.rooms.filter((r) => r['id'] !== id);
    this.save(data);
    
    // Enqueue operation for sync
    this.enqueueOperation('DELETE', 'room', id, { id });
  }

  // Rate Plans
  getRatePlans(): RatePlan[] {
    return this.load().ratePlans;
  }
  addRatePlan(ratePlan: RatePlan): void {
    const data = this.load();
    ratePlan['id'] = this.generateId(data.ratePlans);
    data.ratePlans.push(ratePlan);
    this.save(data);
  }
  updateRatePlan(id: number, updates: Partial<RatePlan>): void {
    const data = this.load();
    const idx = data.ratePlans.findIndex((rp) => rp['id'] === id);
    if (idx !== -1) {
      data.ratePlans[idx] = { ...data.ratePlans[idx], ...updates };
      this.save(data);
    }
  }
  deleteRatePlan(id: number): void {
    const data = this.load();
    data.ratePlans = data.ratePlans.filter((rp) => rp['id'] !== id);
    this.save(data);
  }

  // Taxes
  getTaxes(): Tax[] {
    return this.load().taxes;
  }
  addTax(tax: Tax): void {
    const data = this.load();
    tax['id'] = this.generateId(data.taxes);
    data.taxes.push(tax);
    this.save(data);
  }
  updateTax(id: number, updates: Partial<Tax>): void {
    const data = this.load();
    const idx = data.taxes.findIndex((t) => t['id'] === id);
    if (idx !== -1) {
      data.taxes[idx] = { ...data.taxes[idx], ...updates };
      this.save(data);
    }
  }
  deleteTax(id: number): void {
    const data = this.load();
    data.taxes = data.taxes.filter((t) => t['id'] !== id);
    this.save(data);
  }

  // Policies (combined getter for counts/UI)
  getPolicies(): (CancellationPolicy | BookingPolicy)[] {
    const data = this.load();
    return [...(data.policies?.cancellation || []), ...(data.policies?.booking || [])];
  }
  setPolicies(policies: {
    cancellation: CancellationPolicy[];
    booking: BookingPolicy[];
  }): void {
    const data = this.load();
    data.policies = policies;
    this.save(data);
  }

  // Amenities
  getAmenities(): Amenity[] {
    return this.load().amenities;
  }
  addAmenity(amenity: Amenity): void {
    const data = this.load();
    amenity['id'] = this.generateId(data.amenities);
    data.amenities.push(amenity);
    this.save(data);
  }
  updateAmenity(id: number, updates: Partial<Amenity>): void {
    const data = this.load();
    const idx = data.amenities.findIndex((a) => a['id'] === id);
    if (idx !== -1) {
      data.amenities[idx] = { ...data.amenities[idx], ...updates };
      this.save(data);
    }
  }
  deleteAmenity(id: number): void {
    const data = this.load();
    data.amenities = data.amenities.filter((a) => a['id'] !== id);
    this.save(data);
  }

  // Users
  getUsers(): User[] {
    return this.load().users;
  }
  addUser(user: User): void {
    const data = this.load();
    user['id'] = this.generateId(data.users);
    data.users.push(user);
    this.save(data);
    
    // Enqueue operation for sync
    this.enqueueOperation('CREATE', 'user', user['id'], user);
  }
  updateUser(id: number, updates: Partial<User>): void {
    const data = this.load();
    const idx = data.users.findIndex((u) => u['id'] === id);
    if (idx !== -1) {
      data.users[idx] = { ...data.users[idx], ...updates };
      this.save(data);
      
      // Enqueue operation for sync
      this.enqueueOperation('UPDATE', 'user', id, { id, ...updates });
    }
  }
  deleteUser(id: number): void {
    const data = this.load();
    data.users = data.users.filter((u) => u['id'] !== id);
    this.save(data);
    
    // Enqueue operation for sync
    this.enqueueOperation('DELETE', 'user', id, { id });
  }

  // Import/Export/Clear
  exportData(): string {
    return JSON.stringify(this.load(), null, 2);
  }
  importData(jsonData: string): boolean {
    try {
      const parsed = this.validate(JSON.parse(jsonData) as unknown);
      this.save(parsed);
      return true;
    } catch (e) {
      console.error('Error importing data:', e);
      return false;
    }
  }
  clearAllData(): void {
    this.save({ ...DEFAULT_APP_DATA, hotel: undefined });
  }

  // Utils
  private generateId<T extends { id?: string | number }>(items: T[]): number {
    const maxId =
      items.length > 0 ? Math.max(...items.map((i) => Number(i['id']) || 0)) : 0;
    return maxId + 1;
  }

  // Outbox Pattern Methods
  private generateOperationId(): string {
    return `op_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private updateOutboxSummary(data: AppData): void {
    if (!data.outbox) return;
    const operations = data.outbox.operations;
    data.outbox.summary = {
      totalOperations: operations.length,
      pendingOperations: operations.filter(op => op.status === 'pending').length,
      failedOperations: operations.filter(op => op.status === 'failed').length,
      syncedOperations: operations.filter(op => op.status === 'synced').length,
    };
  }

  enqueueOperation(type: string, entity: string, entityId: string | number, payload: unknown): void {
    const data = this.load();
    if (!data.outbox) return;
    const operation: OutboxOperation = {
      id: this.generateOperationId(),
      type,
      entity,
      entityId,
      payload: payload as Record<string, unknown>,
      status: 'pending',
      timestamp: new Date().toISOString(),
    };

    data.outbox.operations.push(operation);
    this.updateOutboxSummary(data);
    this.save(data);

    console.log(`Enqueued ${type} operation for ${entity}:${entityId}`, operation);
  }

  getOutboxSummary(): OutboxSummary | null {
    const data = this.load();
    return data.outbox?.summary || null;
  }

  getOutboxOperations(): OutboxOperation[] {
    return this.load().outbox?.operations || [];
  }

  clearOutbox(): void {
    const data = this.load();
    if (!data.outbox) return;
    data.outbox.operations = [];
    this.updateOutboxSummary(data);
    this.save(data);
  }

  simulateSync(): void {
    const data = this.load();
    if (!data.outbox) return;
    const pendingOps = data.outbox.operations.filter(op => op.status === 'pending');
    
    console.log('🔄 Starting sync simulation...');
    console.log(`📦 Found ${pendingOps.length} pending operations to sync`);
    
    if (pendingOps.length === 0) {
      console.log('✅ No pending operations to sync');
      return;
    }

    // Simulate sync process
    const syncSummary = {
      total: pendingOps.length,
      successful: 0,
      failed: 0,
      details: [] as { operation: string; entity: string; entityId: string | number; status: 'success' | 'failed'; error?: string }[]
    };

    pendingOps.forEach(operation => {
      // Simulate random success/failure (90% success rate)
      const isSuccess = Math.random() > 0.1;
      
      if (isSuccess) {
        operation.status = 'synced';
        syncSummary.successful++;
        syncSummary.details.push({
          operation: operation['type'] as string,
          entity: operation['entity'] as string,
          entityId: operation['entityId'] as string | number,
          status: 'success'
        });
      } else {
        operation.status = 'failed';
        operation['error'] = 'Simulated network error';
        syncSummary.failed++;
        syncSummary.details.push({
          operation: operation['type'] as string,
          entity: operation['entity'] as string,
          entityId: operation['entityId'] as string | number,
          status: 'failed',
          error: 'Simulated network error'
        });
      }
    });

    // Update sync timestamps
    if (data.outbox) {
      data.outbox.lastSyncAttempt = new Date().toISOString();
      if (syncSummary.successful > 0) {
        data.outbox.lastSuccessfulSync = new Date().toISOString();
      }
    }

    this.updateOutboxSummary(data);
    this.save(data);

    // Log detailed sync summary
    console.log('📊 Sync Summary:');
    console.log(`   Total operations: ${syncSummary.total}`);
    console.log(`   ✅ Successful: ${syncSummary.successful}`);
    console.log(`   ❌ Failed: ${syncSummary.failed}`);
    console.log('   📋 Details:');
    
    syncSummary.details.forEach(detail => {
      const icon = detail.status === 'success' ? '✅' : '❌';
      const errorMsg = detail.error ? ` (${detail.error})` : '';
      console.log(`      ${icon} ${detail.operation} ${detail.entity}:${detail.entityId}${errorMsg}`);
    });

    if (syncSummary.successful > 0) {
      console.log(`🗑️  Successfully synced operations can be cleared from outbox`);
    }

    console.log('🔄 Sync simulation completed');
  }

  // Quick Actions for Sample Data
  seedSampleData(): boolean {
    try {
      console.log('🌱 Seeding sample hotel data...');
      const sampleData = this.generateSampleHotelData();
      
      // Save the sample data
      this.save(sampleData);
      
      console.log('✅ Sample data seeded successfully!');
      console.log(`📊 Generated data summary:`);
      console.log(`   🏨 Hotel: ${sampleData.hotel?.['hotelname']}`);
      console.log(`   🛏️  Room Types: ${sampleData.roomTypes.length}`);
      console.log(`   🏠 Rooms: ${sampleData.rooms.length}`);
      console.log(`   💰 Rate Plans: ${sampleData.ratePlans.length}`);
      console.log(`   🧾 Taxes: ${sampleData.taxes.length}`);
      console.log(`   ⭐ Amenities: ${sampleData.amenities.length}`);
      console.log(`   👥 Users: ${sampleData.users.length}`);
      console.log(`   📋 Policies: ${(sampleData.policies?.cancellation?.length || 0) + (sampleData.policies?.booking?.length || 0)}`);
      
      return true;
    } catch (error) {
      console.error('❌ Error seeding sample data:', error);
      return false;
    }
  }

  resetToFactoryDefaults(): boolean {
    try {
      console.log('🔄 Resetting to factory defaults...');
      const factoryData = this.createFactoryDefaults();
      
      // Clear localStorage and set factory defaults
      localStorage.removeItem(this.STORAGE_KEY);
      this.save(factoryData);
      
      console.log('✅ Reset to factory defaults completed!');
      console.log('📊 All data cleared - system ready for fresh setup');
      
      return true;
    } catch (error) {
      console.error('❌ Error resetting to factory defaults:', error);
      return false;
    }
  }

  getSampleDataPreview(): Record<string, unknown> {
    return {
      hotel: {
        name: 'Grand Palace Hotel & Resort',
        location: 'Miami Beach, Florida',
        starRating: 5,
        totalRooms: 250,
        description: 'A luxurious beachfront resort offering world-class amenities'
      },
      statistics: {
        roomTypes: 4,
        rooms: 250,
        ratePlans: 5,
        taxes: 5,
        amenities: 12,
        users: 5,
        policies: 5
      },
      roomTypes: [
        { name: 'Standard Queen Room', basePrice: 189.00, rooms: 60 },
        { name: 'Deluxe Ocean View', basePrice: 289.00, rooms: 60 },
        { name: 'Junior Suite', basePrice: 459.00, rooms: 24 },
        { name: 'Presidential Suite', basePrice: 1299.00, rooms: 4 }
      ],
      sampleFeatures: [
        'Complete hotel configuration',
        'Realistic room inventory',
        'Multiple rate plans and packages',
        'Comprehensive amenities list',
        'User accounts with different roles',
        'Tax configurations',
        'Booking and cancellation policies'
      ]
    };
  }

  private generateSampleHotelData(): AppData {
    const hotelData = {
      id: 1,
      compid: 1,
      hotelname: 'Grand Palace Hotel & Resort',
      catid: 5,
      logoimage: 'grand-palace-logo.png',
      description: 'A luxurious 5-star beachfront resort offering world-class amenities, breathtaking ocean views, and exceptional service.',
      noofrooms: 250,
      services: 'Spa, Pool, Fitness Center, Business Center, Conference Rooms, Room Service, Concierge, Valet Parking',
      website: 'https://grandpalaceresort.com',
      status: 'Active',
      hotelemailid: 'info@grandpalaceresort.com',
      billingcurrency: 'USD',
      longitude: -80.1300,
      latitude: 25.7617,
      createdby: 1,
      modifiedby: 1
    };

    return {
      hotel: hotelData,
      hotels: [hotelData],
      roomTypes: [
        {
          id: 1,
          hotelid: 1,
          title: 'Standard Queen Room',
          roomtypename: 'Standard Queen Room',
          accronym: 'SQR',
          noofrooms: 60,
          image: 'standard-queen.jpg',
          description: 'Comfortable room with queen bed, city view, and modern amenities.',
          imagename: 'standard-queen-room.jpg',
          isoverbookingalwd: 1,
          overbookingvalue: 5,
          overbookingtype: 'percentage',
          isgenderbase: 0,
          gender: 0,
          stdoccupancy: 2,
          higheroccupancy: 3,
          maxadult: 3,
          maxchild: 1,
          isbedalwd: 1,
          xtralwdbeds: 1,
          taxapplicableon: 'room',
          shortorder: 1,
          createdby: 1,
          status: 'Active',
          modifiedby: 1,
          publishonweb: 1,
          accountcodeid: 2001
        },
        {
          id: 2,
          hotelid: 1,
          title: 'Deluxe Ocean View',
          roomtypename: 'Deluxe Ocean View',
          accronym: 'DOV',
          noofrooms: 60,
          image: 'deluxe-ocean.jpg',
          description: 'Luxurious room with stunning ocean views, king bed, and premium amenities.',
          imagename: 'deluxe-ocean-view.jpg',
          isoverbookingalwd: 1,
          overbookingvalue: 3,
          overbookingtype: 'percentage',
          isgenderbase: 0,
          gender: 0,
          stdoccupancy: 2,
          higheroccupancy: 4,
          maxadult: 4,
          maxchild: 2,
          isbedalwd: 1,
          xtralwdbeds: 1,
          taxapplicableon: 'room',
          shortorder: 2,
          createdby: 1,
          status: 'Active',
          modifiedby: 1,
          publishonweb: 1,
          accountcodeid: 2002
        }
      ],
      rooms: [
        {
          id: 1,
          hotelid: 1,
          floorid: 2,
          rmtypeid: 1,
          rmnameorno: '201',
          roomcode: 'SQR-201',
          description: 'Standard Queen Room on floor 2',
          createdby: 1,
          sortorder: 1,
          status: 'Available',
          modifiedby: 1,
          type: 'Standard'
        },
        {
          id: 2,
          hotelid: 1,
          floorid: 2,
          rmtypeid: 1,
          rmnameorno: '202',
          roomcode: 'SQR-202',
          description: 'Standard Queen Room on floor 2',
          createdby: 1,
          sortorder: 2,
          status: 'Available',
          modifiedby: 1,
          type: 'Standard'
        }
      ],
      ratePlans: [
        {
          id: 1,
          code: 'BAR',
          name: 'Best Available Rate',
          title: 'Best Available Rate',
          occurancy: 'standard',
          billtype: 'room_only',
          rate: 189.00,
          minamount: 189.00,
          status: 'Active',
          createdby: 1,
          modifiedby: 1
        }
      ],
      taxes: [
        {
          id: 1,
          hotelid: 1,
          taxname: 'City Tax',
          taxshortname: 'CITY',
          taxappliedon: 'room',
          taxcategory: 'government',
          taxdepartment: 'accommodation',
          taxtype: 'percentage',
          chargetype: 'automatic',
          tax: 5.5,
          description: 'Miami Beach city tax',
          createdby: 1,
          status: 'Active',
          shortorder: 1,
          modifiedby: 1,
          isslabbased: 0,
          accountcodeid: 1001,
          istaxable: 0,
          isalternate: 0,
          hasrule: 0,
          linepost: 1
        }
      ],
      amenities: [
        {
          id: 1,
          hotelid: 1,
          title: 'Air Conditioning',
          shortname: 'AC',
          description: 'Individual climate control in every room',
          icon: 'ac_unit',
          createdby: 1,
          status: 'Active',
          sortorder: 1,
          modifiedby: 1,
          showonhousekepping: 1
        }
      ],
      users: [
        {
          id: 1,
          compid: 1,
          hotelid: 1,
          bloodgroup: 'O+',
          employeeid: 'ADM001',
          departmentid: 1,
          canlogin: 1,
          jobtypeid: 1,
          emergencyno: '+1-555-0101',
          identitytype: 1,
          identityvalue: 'ADM123456789',
          doj: new Date('2024-01-01'),
          shiftfrom: '09:00',
          shiftto: '17:00',
          present: 1,
          comments: 'Hotel Administrator',
          adminconsoleancper: 'full_access',
          housekeeperancper: 'view_only',
          frontdeskancper: 'full_access',
          createdby: 1,
          status: 'Active',
          modifiedby: 1,
          restrictnareport: 0,
          restrictdtreport: 0,
          restrictminbooking: 0,
          alwaysallownareport: 1,
          restrictrsvediting: 0,
          isreadonly: 0,
          issalesperson: 0,
          ncentitle: 1,
          restrictgsemail: 0
        }
      ],
      policies: {
        cancellation: [
          {
            id: 1,
            name: 'Standard Cancellation',
            hotelid: 1,
            pkgid: 0,
            validityid: 0,
            isseason: 0,
            canpolicyid: 1,
            rmtypeid: 0,
            createdby: 1,
            modifiedby: 1
          }
        ],
        booking: [
          {
            id: 1,
            name: 'Standard Booking',
            hotelid: 1,
            pkgid: 0,
            validityid: 0,
            isseason: 0,
            bookpolicyid: 1,
            rmtypeid: 0,
            createdby: 1,
            modifiedby: 1
          }
        ]
      },
      outbox: {
        operations: [],
        lastSyncAttempt: undefined,
        lastSuccessfulSync: undefined,
        summary: {
          totalOperations: 0,
          pendingOperations: 0,
          failedOperations: 0,
          syncedOperations: 0,
        },
      },
      lastModified: new Date().toISOString(),
      version: '1.0.0',
    };
  }

  private createFactoryDefaults(): AppData {
    return {
      ...DEFAULT_APP_DATA,
      hotel: undefined
    };
  }
}
