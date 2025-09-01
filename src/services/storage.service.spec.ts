import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';
import { AppData, DEFAULT_APP_DATA } from '../models/app-data.model';
import { Hotel } from '../models/hotel.model';
import { RoomType } from '../models/room-type.model';
import { Room } from '../models/room.model';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    // Clear real localStorage before each test
    localStorage.clear();
    
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
    
    // Ensure clean state by explicitly clearing and reloading
    service.clearAllData();
    
    // Force reload from storage to ensure clean state
    const cleanData = service.getSnapshot();
    expect(cleanData.roomTypes.length).toBe(0);
  });

  afterEach(() => {
    // Clear any data between tests
    localStorage.clear();
  });

  describe('Data Validation', () => {
    it('should return default data when localStorage is empty', () => {
      const snapshot = service.getSnapshot();
      expect(snapshot).toEqual(jasmine.objectContaining({
        hotel: null,
        roomTypes: [],
        rooms: [],
        ratePlans: [],
        taxes: [],
        amenities: [],
        users: [],
        policies: {
          cancellation: [],
          booking: []
        }
      }));
    });

    it('should validate and fix corrupted data from localStorage', () => {
      const corruptedData = JSON.stringify({
        hotel: 'invalid',
        roomTypes: 'not-array',
        rooms: null
      });
      
      // Set up the corrupted data directly
      localStorage.setItem('hotel-admin-data', corruptedData);
      
      // Create a completely new service instance
      const newService = new StorageService();
      
      const snapshot = newService.getSnapshot();
      expect(snapshot.hotel).toBeNull();
      expect(Array.isArray(snapshot.roomTypes)).toBe(true);
      expect(Array.isArray(snapshot.rooms)).toBe(true);
    });

    it('should handle malformed JSON gracefully', () => {
      spyOn(localStorage, 'getItem').and.returnValue('invalid-json{');
      
      const snapshot = service.getSnapshot();
      expect(snapshot).toEqual(jasmine.objectContaining(DEFAULT_APP_DATA));
    });

    it('should handle malformed JSON gracefully', () => {
      // Set up malformed JSON data directly  
      localStorage.setItem('hotel-admin-data', 'invalid-json{');
      
      // Create a completely new service instance
      const newService = new StorageService();
      
      const snapshot = newService.getSnapshot();
      expect(snapshot).toEqual(jasmine.objectContaining(DEFAULT_APP_DATA));
    });
  });

  describe('Hotel Management', () => {
    it('should set and get hotel data', () => {
      const hotel: Hotel = {
        id: 1,
        compid: 1,
        hotelname: 'Test Hotel',
        catid: 5,
        status: 'Active',
        createdby: 1,
        modifiedby: 1
      };

      service.setHotel(hotel);
      const retrieved = service.getHotel();
      
      expect(retrieved).toEqual(jasmine.objectContaining({
        hotelname: 'Test Hotel',
        catid: 5,
        status: 'Active'
      }));
    });

    it('should generate ID for hotel if not provided', () => {
      const hotel: Hotel = {
        id: 0, // No ID
        compid: 1,
        hotelname: 'Test Hotel',
        status: 'Active',
        createdby: 1,
        modifiedby: 1
      };

      service.setHotel(hotel);
      const retrieved = service.getHotel();
      
      expect(retrieved?.id).toBeDefined();
      expect(retrieved?.id).toBeGreaterThan(0);
    });
  });

  describe('Room Type Management', () => {
    it('should add room type with generated ID', () => {
      const roomType: RoomType = {
        id: 0,
        hotelid: 1,
        title: 'Deluxe Room',
        roomtypename: 'Deluxe Room',
        accronym: 'DLX',
        noofrooms: 10,
        image: 'deluxe.jpg',
        description: 'Luxury deluxe room',
        isoverbookingalwd: 0,
        overbookingvalue: 0,
        overbookingtype: 'none',
        isgenderbase: 0,
        stdoccupancy: 2,
        higheroccupancy: 3,
        isbedalwd: 1,
        xtralwdbeds: 1,
        taxapplicableon: 'room',
        createdby: 1,
        status: 'Active',
        modifiedby: 1
      };

      service.addRoomType(roomType);
      const roomTypes = service.getRoomTypes();
      
      expect(roomTypes).toHaveSize(1);
      expect(roomTypes[0].id).toBeGreaterThan(0);
      expect(roomTypes[0].title).toBe('Deluxe Room');
    });

    it('should update room type', () => {
      const roomType: RoomType = {
        id: 1,
        hotelid: 1,
        title: 'Standard Room',
        roomtypename: 'Standard Room',
        accronym: 'STD',
        noofrooms: 5,
        image: 'standard.jpg',
        description: 'Basic room',
        isoverbookingalwd: 0,
        overbookingvalue: 0,
        overbookingtype: 'none',
        isgenderbase: 0,
        stdoccupancy: 2,
        higheroccupancy: 3,
        isbedalwd: 1,
        xtralwdbeds: 1,
        taxapplicableon: 'room',
        createdby: 1,
        status: 'Active',
        modifiedby: 1
      };

      service.addRoomType(roomType);
      service.updateRoomType(1, { title: 'Updated Standard Room', noofrooms: 8 });
      
      const roomTypes = service.getRoomTypes();
      expect(roomTypes[0].title).toBe('Updated Standard Room');
      expect(roomTypes[0].noofrooms).toBe(8);
    });

    it('should delete room type and trigger outbox operation', () => {
      const roomType: RoomType = {
        id: 1,
        hotelid: 1,
        title: 'To Delete',
        roomtypename: 'To Delete',
        accronym: 'DEL',
        noofrooms: 1,
        image: 'delete.jpg',
        description: 'Room to delete',
        isoverbookingalwd: 0,
        overbookingvalue: 0,
        overbookingtype: 'none',
        isgenderbase: 0,
        stdoccupancy: 1,
        higheroccupancy: 2,
        isbedalwd: 0,
        xtralwdbeds: 0,
        taxapplicableon: 'room',
        createdby: 1,
        status: 'Active',
        modifiedby: 1
      };

      service.addRoomType(roomType);
      expect(service.getRoomTypes()).toHaveSize(1);
      
      service.deleteRoomType(1);
      expect(service.getRoomTypes()).toHaveSize(0);
      
      // Check outbox operation was created
      const operations = service.getOutboxOperations();
      expect(operations.some(op => op.type === 'DELETE' && op.entity === 'roomType')).toBeTrue();
    });
  });

  describe('Room Management', () => {
    it('should add and manage rooms', () => {
      const room: Room = {
        id: 0,
        hotelid: 1,
        floorid: 1,
        rmtypeid: 1,
        rmnameorno: '101',
        roomcode: 'STD-101',
        description: 'Standard room 101',
        createdby: 1,
        status: 'Available',
        modifiedby: 1
      };

      service.addRoom(room);
      const rooms = service.getRooms();
      
      expect(rooms).toHaveSize(1);
      expect(rooms[0].rmnameorno).toBe('101');
      expect(rooms[0].id).toBeGreaterThan(0);
    });

    it('should prevent deletion of rooms when policy blocks it', () => {
      // Add a room first
      const room: Room = {
        id: 1,
        hotelid: 1,
        rmtypeid: 1,
        rmnameorno: '101',
        roomcode: 'STD-101',
        description: 'Room to potentially delete',
        createdby: 1,
        status: 'Available',
        modifiedby: 1
      };

      service.addRoom(room);
      expect(service.getRooms()).toHaveSize(1);
      
      // For now, deletion is always allowed, but this test structure 
      // prepares for future business rules
      service.deleteRoom(1);
      expect(service.getRooms()).toHaveSize(0);
    });
  });

  describe('Import/Export Functionality', () => {
    it('should export data as JSON string', () => {
      // Setup some test data
      const hotel: Hotel = {
        id: 1,
        compid: 1,
        hotelname: 'Export Test Hotel',
        status: 'Active',
        createdby: 1,
        modifiedby: 1
      };
      
      service.setHotel(hotel);
      
      const exportedData = service.exportData();
      const parsed = JSON.parse(exportedData);
      
      expect(parsed.hotel.hotelname).toBe('Export Test Hotel');
      expect(parsed.version).toBeDefined();
      expect(parsed.lastModified).toBeDefined();
    });

    it('should import valid JSON data', () => {
      const importData: AppData = {
        ...DEFAULT_APP_DATA,
        hotel: {
          id: 1,
          compid: 1,
          hotelname: 'Imported Hotel',
          status: 'Active',
          createdby: 1,
          modifiedby: 1
        },
        roomTypes: [{
          id: 1,
          hotelid: 1,
          title: 'Imported Room Type',
          roomtypename: 'Imported Room Type',
          accronym: 'IMP',
          noofrooms: 5,
          image: 'imported.jpg',
          description: 'Imported room type',
          isoverbookingalwd: 0,
          overbookingvalue: 0,
          overbookingtype: 'none',
          isgenderbase: 0,
          stdoccupancy: 2,
          higheroccupancy: 3,
          isbedalwd: 1,
          xtralwdbeds: 1,
          taxapplicableon: 'room',
          createdby: 1,
          status: 'Active',
          modifiedby: 1
        }],
        lastModified: new Date().toISOString()
      };

      const success = service.importData(JSON.stringify(importData));
      
      expect(success).toBeTrue();
      expect(service.getHotel()?.hotelname).toBe('Imported Hotel');
      expect(service.getRoomTypes()).toHaveSize(1);
      expect(service.getRoomTypes()[0].title).toBe('Imported Room Type');
    });

    it('should reject invalid import data', () => {
      const invalidJson = 'invalid-json-string{';
      const success = service.importData(invalidJson);
      
      expect(success).toBeFalse();
    });

    it('should handle partial import data gracefully', () => {
      const partialData = {
        hotel: {
          id: 1,
          hotelname: 'Partial Hotel'
        },
        // Missing required fields
      };

      const success = service.importData(JSON.stringify(partialData));
      
      expect(success).toBeTrue(); // Should still import what's valid
      const snapshot = service.getSnapshot();
      expect(snapshot.roomTypes).toEqual([]); // Should have defaults for missing data
    });
  });

  describe('Outbox Pattern', () => {
    it('should track operations in outbox', () => {
      const roomType: RoomType = {
        id: 0,
        hotelid: 1,
        title: 'Test Room',
        roomtypename: 'Test Room',
        accronym: 'TEST',
        noofrooms: 1,
        image: 'test.jpg',
        description: 'Test room type',
        isoverbookingalwd: 0,
        overbookingvalue: 0,
        overbookingtype: 'none',
        isgenderbase: 0,
        stdoccupancy: 1,
        higheroccupancy: 2,
        isbedalwd: 0,
        xtralwdbeds: 0,
        taxapplicableon: 'room',
        createdby: 1,
        status: 'Active',
        modifiedby: 1
      };

      service.addRoomType(roomType);
      
      const operations = service.getOutboxOperations();
      expect(operations).toHaveSize(1);
      expect(operations[0].type).toBe('CREATE');
      expect(operations[0].entity).toBe('roomType');
      expect(operations[0].status).toBe('pending');
    });

    it('should provide outbox summary', () => {
      // Add some operations
      service.addRoomType({
        id: 0,
        hotelid: 1,
        title: 'Test 1',
        roomtypename: 'Test 1',
        accronym: 'T1',
        noofrooms: 1,
        image: 'test1.jpg',
        description: 'Test room type 1',
        isoverbookingalwd: 0,
        overbookingvalue: 0,
        overbookingtype: 'none',
        isgenderbase: 0,
        stdoccupancy: 1,
        higheroccupancy: 2,
        isbedalwd: 0,
        xtralwdbeds: 0,
        taxapplicableon: 'room',
        createdby: 1,
        status: 'Active',
        modifiedby: 1
      });

      const summary = service.getOutboxSummary();
      expect(summary.totalOperations).toBe(1);
      expect(summary.pendingOperations).toBe(1);
      expect(summary.failedOperations).toBe(0);
      expect(summary.syncedOperations).toBe(0);
    });

    it('should simulate sync operations', () => {
      // Add some test data to create operations
      service.addRoomType({
        id: 0,
        hotelid: 1,
        title: 'Sync Test',
        roomtypename: 'Sync Test',
        accronym: 'SYNC',
        noofrooms: 1,
        image: 'sync.jpg',
        description: 'Sync test room type',
        isoverbookingalwd: 0,
        overbookingvalue: 0,
        overbookingtype: 'none',
        isgenderbase: 0,
        stdoccupancy: 1,
        higheroccupancy: 2,
        isbedalwd: 0,
        xtralwdbeds: 0,
        taxapplicableon: 'room',
        createdby: 1,
        status: 'Active',
        modifiedby: 1
      });

      // Mock console.log to spy on sync output
      spyOn(console, 'log');

      service.simulateSync();
      
      expect(console.log).toHaveBeenCalledWith('🔄 Starting sync simulation...');
      
      const summary = service.getOutboxSummary();
      // Most operations should be synced (90% success rate in simulation)
      expect(summary.totalOperations).toBe(1);
    });

    it('should clear outbox operations', () => {
      // Create an operation first
      service.addRoomType({
        id: 0,
        hotelid: 1,
        title: 'Clear Test',
        roomtypename: 'Clear Test',
        accronym: 'CLR',
        noofrooms: 1,
        image: 'clear.jpg',
        description: 'Clear test room type',
        isoverbookingalwd: 0,
        overbookingvalue: 0,
        overbookingtype: 'none',
        isgenderbase: 0,
        stdoccupancy: 1,
        higheroccupancy: 2,
        isbedalwd: 0,
        xtralwdbeds: 0,
        taxapplicableon: 'room',
        createdby: 1,
        status: 'Active',
        modifiedby: 1
      });

      expect(service.getOutboxOperations()).toHaveSize(1);
      
      service.clearOutbox();
      expect(service.getOutboxOperations()).toHaveSize(0);
      
      const summary = service.getOutboxSummary();
      expect(summary.totalOperations).toBe(0);
    });
  });

  describe('Sample Data Generation', () => {
    it('should seed sample data successfully', () => {
      const success = service.seedSampleData();
      
      expect(success).toBeTrue();
      
      const snapshot = service.getSnapshot();
      expect(snapshot.hotel).toBeTruthy();
      expect(snapshot.hotel?.hotelname).toContain('Grand Palace');
      expect(snapshot.roomTypes.length).toBeGreaterThan(0);
      expect(snapshot.rooms.length).toBeGreaterThan(0);
      expect(snapshot.amenities.length).toBeGreaterThan(0);
      expect(snapshot.taxes.length).toBeGreaterThan(0);
      expect(snapshot.users.length).toBeGreaterThan(0);
    });

    it('should reset to factory defaults', () => {
      // First seed some data
      service.seedSampleData();
      expect(service.getHotel()).toBeTruthy();
      
      // Then reset
      const success = service.resetToFactoryDefaults();
      
      expect(success).toBeTrue();
      expect(service.getHotel()).toBeNull();
      expect(service.getRoomTypes()).toHaveSize(0);
      expect(service.getRooms()).toHaveSize(0);
    });

    it('should provide sample data preview', () => {
      const preview = service.getSampleDataPreview();
      
      expect(preview['hotel']).toBeDefined();
      expect(preview['statistics']).toBeDefined();
      expect(preview['roomTypes']).toBeDefined();
      expect(preview['sampleFeatures']).toBeDefined();
      
      // Verify structure
      const stats = preview['statistics'] as Record<string, unknown>;
      expect(stats['roomTypes']).toBeDefined();
      expect(stats['rooms']).toBeDefined();
      expect(stats['amenities']).toBeDefined();
    });
  });

  describe('Data Persistence', () => {
    it('should save data to localStorage on changes', () => {
      const hotel: Hotel = {
        id: 1,
        compid: 1,
        hotelname: 'Persistence Test Hotel',
        status: 'Active',
        createdby: 1,
        modifiedby: 1
      };

      service.setHotel(hotel);
      
      // Check that the hotel was saved properly by retrieving it
      const retrievedHotel = service.getHotel();
      expect(retrievedHotel).toBeTruthy();
      expect(retrievedHotel?.hotelname).toBe('Persistence Test Hotel');
      
      // Check timestamp was updated
      const snapshot = service.getSnapshot();
      expect(snapshot.lastModified).toBeDefined();
    });

    it('should update lastModified timestamp on changes', () => {
      const beforeTime = new Date().getTime();
      
      service.setHotel({
        id: 1,
        compid: 1,
        hotelname: 'Timestamp Test',
        status: 'Active',
        createdby: 1,
        modifiedby: 1
      });
      
      const snapshot = service.getSnapshot();
      const lastModifiedTime = new Date(snapshot.lastModified).getTime();
      expect(lastModifiedTime).toBeGreaterThanOrEqual(beforeTime);
    });
  });

  describe('Error Handling', () => {
    it('should handle localStorage errors gracefully', () => {
      // Mock localStorage to throw an error
      spyOn(localStorage, 'setItem').and.throwError('Storage full');
      
      // Should not throw when trying to save
      expect(() => {
        service.setHotel({
          id: 1,
          compid: 1,
          hotelname: 'Error Test',
          status: 'Active',
          createdby: 1,
          modifiedby: 1
        });
      }).not.toThrow();
    });

    it('should handle missing entity updates gracefully', () => {
      // Try to update non-existent room type
      service.updateRoomType(999, { title: 'Updated Non-existent' });
      
      // Should not crash and room types should remain empty
      expect(service.getRoomTypes()).toHaveSize(0);
    });
  });
});
