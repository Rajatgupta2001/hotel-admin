import { test, expect, Page } from '@playwright/test';

interface HotelData {
  hotel: {
    hotelname?: string;
    [key: string]: unknown;
  } | null;
  roomTypes: {
    id: number;
    title: string;
    accronym: string;
    noofrooms: number;
    [key: string]: unknown;
  }[];
  rooms: unknown[];
  ratePlans: unknown[];
  taxes: unknown[];
  amenities: unknown[];
  users: unknown[];
  policies: unknown;
  outbox: {
    operations: {
      type: string;
      entity: string;
      status: string;
      [key: string]: unknown;
    }[];
    [key: string]: unknown;
  };
  lastModified: string;
  version: string;
  exportDate?: string;
}

class HotelAdminApp {
  constructor(public page: Page) {}

  async goto() {
    await this.page.goto('http://localhost:4200');
    await this.page.waitForLoadState('networkidle');
  }

  async navigateToDashboard() {
    await this.page.click('[data-testid="nav-dashboard"]');
    await this.page.waitForURL('**/dashboard');
  }

  async navigateToRoomTypes() {
    await this.page.click('[data-testid="nav-room-types"]');
    await this.page.waitForURL('**/room-types');
  }

  async seedSampleData() {
    await this.navigateToDashboard();
    await this.page.click('[data-testid="seed-sample-data-btn"]');
    await this.page.waitForTimeout(1000); // Wait for data to be seeded
  }

  async resetToDefaults() {
    await this.navigateToDashboard();
    await this.page.click('[data-testid="reset-defaults-btn"]');
    await this.page.waitForTimeout(1000); // Wait for reset to complete
  }

  async exportData() {
    await this.navigateToDashboard();
    await this.page.click('[data-testid="export-data-btn"]');
  }

  async importData(jsonData: string) {
    await this.navigateToDashboard();
    await this.page.click('[data-testid="import-data-btn"]');
    await this.page.fill('[data-testid="import-textarea"]', jsonData);
    await this.page.click('[data-testid="import-confirm-btn"]');
  }

  async createRoomType(roomTypeData: {
    title: string;
    accronym: string;
    noofrooms: number;
    description: string;
  }) {
    await this.navigateToRoomTypes();
    await this.page.click('[data-testid="add-room-type-btn"]');
    
    await this.page.fill('[data-testid="room-type-title"]', roomTypeData.title);
    await this.page.fill('[data-testid="room-type-acronym"]', roomTypeData.accronym);
    await this.page.fill('[data-testid="room-type-rooms"]', roomTypeData.noofrooms.toString());
    await this.page.fill('[data-testid="room-type-description"]', roomTypeData.description);
    
    await this.page.click('[data-testid="save-room-type-btn"]');
    await this.page.waitForTimeout(500);
  }

  async deleteRoomType(roomTypeTitle: string, expectBlock = false) {
    await this.navigateToRoomTypes();
    
    const roomTypeRow = this.page.locator(`[data-testid="room-type-row"]:has-text("${roomTypeTitle}")`);
    await roomTypeRow.locator('[data-testid="delete-btn"]').click();
    
    if (expectBlock) {
      // Expect a blocking dialog or error message
      await expect(this.page.locator('[data-testid="delete-blocked-message"]')).toBeVisible();
      await this.page.click('[data-testid="delete-blocked-ok-btn"]');
    } else {
      // Confirm deletion
      await this.page.click('[data-testid="confirm-delete-btn"]');
      await this.page.waitForTimeout(500);
    }
  }

  async getLocalStorageData(): Promise<HotelData | null> {
    return await this.page.evaluate(() => {
      const data = localStorage.getItem('hotel-admin-data');
      return data ? JSON.parse(data) : null;
    });
  }

  async setLocalStorageData(data: HotelData) {
    await this.page.evaluate((data) => {
      localStorage.setItem('hotel-admin-data', JSON.stringify(data));
    }, data);
  }

  async clearLocalStorage() {
    await this.page.evaluate(() => {
      localStorage.clear();
    });
  }

  async checkOutboxOperations() {
    await this.navigateToDashboard();
    const outboxSection = this.page.locator('[data-testid="outbox-section"]');
    return await outboxSection.isVisible();
  }

  async getOutboxOperationCount(): Promise<number> {
    await this.navigateToDashboard();
    const countElement = this.page.locator('[data-testid="outbox-operation-count"]');
    const text = await countElement.textContent();
    return parseInt(text || '0', 10);
  }

  async simulateSync() {
    await this.navigateToDashboard();
    await this.page.click('[data-testid="simulate-sync-btn"]');
    await this.page.waitForTimeout(1000);
  }

  // Helper function to safely get storage data with type assertion
  async getStorageDataSafely(): Promise<HotelData> {
    const data = await this.getLocalStorageData();
    expect(data).toBeTruthy();
    return data as HotelData;
  }
}

test.describe('Hotel Admin E2E Tests', () => {
  let app: HotelAdminApp;

  test.beforeEach(async ({ page }) => {
    app = new HotelAdminApp(page);
    await app.goto();
    await app.clearLocalStorage();
  });

  test.describe('Data Persistence and localStorage', () => {
    test('should persist data to localStorage as single JSON object', async () => {
      await app.seedSampleData();
      
      const storageData = await app.getLocalStorageData();
      
      // Verify it's a single JSON object with expected structure
      expect(storageData).toBeTruthy();
      expect(storageData!.hotel).toBeTruthy();
      expect(storageData!.roomTypes).toBeInstanceOf(Array);
      expect(storageData!.rooms).toBeInstanceOf(Array);
      expect(storageData!.ratePlans).toBeInstanceOf(Array);
      expect(storageData!.taxes).toBeInstanceOf(Array);
      expect(storageData!.amenities).toBeInstanceOf(Array);
      expect(storageData!.users).toBeInstanceOf(Array);
      expect(storageData!.policies).toBeTruthy();
      expect(storageData!.outbox).toBeTruthy();
      expect(storageData!.lastModified).toBeTruthy();
      expect(storageData!.version).toBeTruthy();
      
      // Verify the JSON can be serialized and parsed
      const jsonString = JSON.stringify(storageData);
      expect(() => JSON.parse(jsonString)).not.toThrow();
    });

    test('should load data from localStorage on app start', async () => {
      const testData = {
        hotel: {
          id: 1,
          compid: 1,
          hotelname: 'Test Hotel from Storage',
          status: 'Active',
          createdby: 1,
          modifiedby: 1
        },
        roomTypes: [{
          id: 1,
          hotelid: 1,
          title: 'Preloaded Room Type',
          roomtypename: 'Preloaded Room Type',
          accronym: 'PRE',
          noofrooms: 5,
          image: 'preloaded.jpg',
          description: 'Room type loaded from storage',
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
        rooms: [],
        ratePlans: [],
        taxes: [],
        amenities: [],
        users: [],
        policies: { cancellation: [], booking: [] },
        outbox: {
          operations: [],
          lastSyncAttempt: undefined,
          lastSuccessfulSync: undefined,
          summary: { totalOperations: 0, pendingOperations: 0, failedOperations: 0, syncedOperations: 0 }
        },
        lastModified: new Date().toISOString(),
        version: '1.0.0'
      };

      await app.setLocalStorageData(testData);
      await app.page.reload();
      
      // Navigate to dashboard to check if data is loaded
      await app.navigateToDashboard();
      
      // Verify hotel name is displayed
      await expect(app.page.locator(':text("Test Hotel from Storage")')).toBeVisible();
      
      // Navigate to room types to verify room type is loaded
      await app.navigateToRoomTypes();
      await expect(app.page.locator(':text("Preloaded Room Type")')).toBeVisible();
    });

    test('should handle corrupted localStorage gracefully', async () => {
      // Set invalid JSON in localStorage
      await app.page.evaluate(() => {
        localStorage.setItem('hotel-admin-data', 'invalid-json{broken}');
      });
      
      await app.page.reload();
      await app.navigateToDashboard();
      
      // App should still load with default data
      const storageData = await app.getLocalStorageData();
      expect(storageData).toBeTruthy();
      expect(storageData!.hotel).toBeNull();
      expect(storageData!.roomTypes).toEqual([]);
    });
  });

  test.describe('CRUD Operations', () => {
    test('should create room type and persist to localStorage', async () => {
      const roomTypeData = {
        title: 'E2E Test Room',
        accronym: 'E2E',
        noofrooms: 10,
        description: 'Room type created in E2E test'
      };

      await app.createRoomType(roomTypeData);
      
      // Verify in UI
      await app.navigateToRoomTypes();
      await expect(app.page.locator(':text("E2E Test Room")')).toBeVisible();
      
      // Verify in localStorage
      const storageData = await app.getLocalStorageData();
      expect(storageData).toBeTruthy();
      const data = storageData as HotelData;
      expect(data.roomTypes).toHaveLength(1);
      expect(data.roomTypes[0].title).toBe('E2E Test Room');
      expect(data.roomTypes[0].accronym).toBe('E2E');
      expect(data.roomTypes[0].noofrooms).toBe(10);
    });

    test('should update room type and reflect in localStorage', async () => {
      // First create a room type
      await app.createRoomType({
        title: 'Original Room',
        accronym: 'ORIG',
        noofrooms: 5,
        description: 'Original room type'
      });
      
      // Then update it
      await app.navigateToRoomTypes();
      const roomTypeRow = app.page.locator('[data-testid="room-type-row"]:has-text("Original Room")');
      await roomTypeRow.locator('[data-testid="edit-btn"]').click();
      
      await app.page.fill('[data-testid="room-type-title"]', 'Updated Room');
      await app.page.fill('[data-testid="room-type-rooms"]', '8');
      await app.page.click('[data-testid="save-room-type-btn"]');
      
      // Verify in UI
      await expect(app.page.locator(':text("Updated Room")')).toBeVisible();
      
      // Verify in localStorage
      const storageData = await app.getLocalStorageData();
      expect(storageData).toBeTruthy();
      const data = storageData as HotelData;
      expect(data.roomTypes[0].title).toBe('Updated Room');
      expect(data.roomTypes[0].noofrooms).toBe(8);
    });

    test('should delete room type when allowed', async () => {
      // Create a room type first
      await app.createRoomType({
        title: 'To Delete',
        accronym: 'DEL',
        noofrooms: 3,
        description: 'Room type to be deleted'
      });
      
      // Verify it exists
      await app.navigateToRoomTypes();
      await expect(app.page.locator(':text("To Delete")')).toBeVisible();
      
      // Delete it
      await app.deleteRoomType('To Delete', false);
      
      // Verify it's gone from UI
      await expect(app.page.locator(':text("To Delete")')).not.toBeVisible();
      
      // Verify it's gone from localStorage
      const storageData = await app.getStorageDataSafely();
      expect(storageData.roomTypes).toHaveLength(0);
    });

    test('should block deletion when business rules prevent it', async () => {
      // Create a room type with associated rooms
      await app.createRoomType({
        title: 'Room Type with Rooms',
        accronym: 'RWR',
        noofrooms: 5,
        description: 'Room type that has associated rooms'
      });
      
      // Create rooms associated with this room type (in a real scenario)
      // For now, we'll simulate the blocking behavior
      
      // Try to delete and expect it to be blocked
      await app.deleteRoomType('Room Type with Rooms', true);
      
      // Verify it still exists
      await app.navigateToRoomTypes();
      await expect(app.page.locator(':text("Room Type with Rooms")')).toBeVisible();
      
      // Verify it's still in localStorage
      const storageData = await app.getStorageDataSafely();
      expect(storageData.roomTypes).toHaveLength(1);
    });
  });

  test.describe('Import/Export Functionality', () => {
    test('should export data and maintain JSON structure', async () => {
      // Seed some data first
      await app.seedSampleData();
      
      // Mock the download functionality and capture the exported data
      let exportedData = '';
      await app.page.exposeFunction('mockDownload', (data: string) => {
        exportedData = data;
      });
      
      // Override download behavior
      await app.page.addInitScript(() => {
        interface WindowWithMock extends Window {
          originalCreateElement: typeof document.createElement;
          mockDownload: (data: string) => void;
        }
        const windowMock = window as unknown as WindowWithMock;
        
        windowMock.originalCreateElement = document.createElement;
        document.createElement = function(tagName: string) {
          if (tagName === 'a') {
            const link = windowMock.originalCreateElement.call(this, tagName);
            link.click = function() {
              if (link.href.startsWith('blob:')) {
                // Extract the blob data
                fetch(link.href)
                  .then(response => response.text())
                  .then(data => windowMock.mockDownload(data));
              }
            };
            return link;
          }
          return windowMock.originalCreateElement.call(this, tagName);
        };
      });
      
      await app.exportData();
      
      // Wait for export to complete
      await app.page.waitForTimeout(1000);
      
      // Verify exported data is valid JSON
      expect(() => JSON.parse(exportedData)).not.toThrow();
      
      const parsedData = JSON.parse(exportedData);
      expect(parsedData.hotel).toBeTruthy();
      expect(parsedData.exportDate).toBeTruthy();
      expect(parsedData.version).toBeTruthy();
    });

    test('should import valid JSON data', async () => {
      const importData = {
        hotel: {
          id: 1,
          compid: 1,
          hotelname: 'Imported Test Hotel',
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
          noofrooms: 12,
          image: 'imported.jpg',
          description: 'This room type was imported',
          isoverbookingalwd: 0,
          overbookingvalue: 0,
          overbookingtype: 'none',
          isgenderbase: 0,
          stdoccupancy: 2,
          higheroccupancy: 4,
          isbedalwd: 1,
          xtralwdbeds: 2,
          taxapplicableon: 'room',
          createdby: 1,
          status: 'Active',
          modifiedby: 1
        }],
        rooms: [],
        ratePlans: [],
        taxes: [],
        amenities: [],
        users: [],
        policies: { cancellation: [], booking: [] },
        outbox: {
          operations: [],
          lastSyncAttempt: undefined,
          lastSuccessfulSync: undefined,
          summary: { totalOperations: 0, pendingOperations: 0, failedOperations: 0, syncedOperations: 0 }
        },
        lastModified: new Date().toISOString(),
        version: '1.0.0',
        exportDate: new Date().toISOString()
      };

      await app.importData(JSON.stringify(importData));
      
      // Verify import success message
      await expect(app.page.locator('[data-testid="import-success-message"]')).toBeVisible();
      
      // Verify data is loaded
      await app.navigateToDashboard();
      await expect(app.page.locator(':text("Imported Test Hotel")')).toBeVisible();
      
      await app.navigateToRoomTypes();
      await expect(app.page.locator(':text("Imported Room Type")')).toBeVisible();
      
      // Verify in localStorage
      const storageData = await app.getStorageDataSafely();
      expect(storageData.hotel?.hotelname).toBe('Imported Test Hotel');
      expect(storageData.roomTypes).toHaveLength(1);
      expect(storageData.roomTypes[0].title).toBe('Imported Room Type');
    });

    test('should reject invalid import data', async () => {
      const invalidData = 'invalid-json-string{broken}';
      
      await app.importData(invalidData);
      
      // Verify error message
      await expect(app.page.locator('[data-testid="import-error-message"]')).toBeVisible();
      
      // Verify no data was imported
      const storageData = await app.getLocalStorageData();
      expect(storageData).toBeTruthy();
      expect(storageData!.hotel).toBeNull();
      expect(storageData!.roomTypes).toEqual([]);
    });

    test('should handle partial import data gracefully', async () => {
      const partialData = {
        hotel: {
          id: 1,
          hotelname: 'Partial Hotel'
          // Missing required fields
        },
        roomTypes: [
          // Invalid room type missing required fields
          {
            id: 1,
            title: 'Incomplete Room Type'
          }
        ]
        // Missing other required top-level fields
      };

      await app.importData(JSON.stringify(partialData));
      
      // Should import what's valid and use defaults for missing data
      const storageData = await app.getStorageDataSafely();
      expect(storageData.hotel).toBeTruthy(); // Should have some hotel data
      expect(storageData.rooms).toEqual([]); // Should have default empty arrays
      expect(storageData.amenities).toEqual([]);
    });
  });

  test.describe('Outbox Pattern and Sync', () => {
    test('should track operations in outbox', async () => {
      // Create a room type to generate an operation
      await app.createRoomType({
        title: 'Outbox Test Room',
        accronym: 'OUT',
        noofrooms: 4,
        description: 'Room type for outbox testing'
      });
      
      // Check outbox operations
      const operationCount = await app.getOutboxOperationCount();
      expect(operationCount).toBeGreaterThan(0);
      
      // Verify in localStorage
      const storageData = await app.getStorageDataSafely();
      expect(storageData.outbox.operations).toHaveLength(1);
      expect(storageData.outbox.operations[0].type).toBe('CREATE');
      expect(storageData.outbox.operations[0].entity).toBe('roomType');
      expect(storageData.outbox.operations[0].status).toBe('pending');
    });

    test('should simulate sync operations', async () => {
      // Create some operations first
      await app.createRoomType({
        title: 'Sync Test Room 1',
        accronym: 'ST1',
        noofrooms: 2,
        description: 'First sync test room'
      });
      
      await app.createRoomType({
        title: 'Sync Test Room 2',
        accronym: 'ST2',
        noofrooms: 3,
        description: 'Second sync test room'
      });
      
      // Verify operations are pending
      const operationCount = await app.getOutboxOperationCount();
      expect(operationCount).toBe(2);
      
      // Simulate sync
      await app.simulateSync();
      
      // Verify sync results (some operations should be marked as synced)
      await app.page.waitForTimeout(1000);
      const storageData = await app.getStorageDataSafely();
      const syncedOperations = storageData.outbox.operations.filter(
        (op) => op.status === 'synced'
      );
      expect(syncedOperations.length).toBeGreaterThan(0);
    });

    test('should clear outbox operations', async () => {
      // Create an operation first
      await app.createRoomType({
        title: 'Clear Test Room',
        accronym: 'CLR',
        noofrooms: 1,
        description: 'Room for clear test'
      });
      
      const initialCount = await app.getOutboxOperationCount();
      expect(initialCount).toBeGreaterThan(0);
      
      // Clear outbox
      await app.navigateToDashboard();
      await app.page.click('[data-testid="clear-outbox-btn"]');
      
      // Verify operations are cleared
      const finalCount = await app.getOutboxOperationCount();
      expect(finalCount).toBe(0);
      
      const storageData = await app.getStorageDataSafely();
      expect(storageData.outbox.operations).toHaveLength(0);
    });
  });

  test.describe('Sample Data and Factory Reset', () => {
    test('should seed sample data successfully', async () => {
      await app.seedSampleData();
      
      // Verify sample data is loaded
      await app.navigateToDashboard();
      await expect(app.page.locator(':text("Grand Palace")')).toBeVisible();
      
      // Verify various entities are created
      await app.navigateToRoomTypes();
      const roomTypeElements = app.page.locator('[data-testid="room-type-row"]');
      const roomTypeCount = await roomTypeElements.count();
      expect(roomTypeCount).toBeGreaterThan(0);
      
      // Verify in localStorage
      const storageData = await app.getStorageDataSafely();
      expect(storageData.hotel).toBeTruthy();
      expect(storageData.hotel?.hotelname).toContain('Grand Palace');
      expect(storageData.roomTypes.length).toBeGreaterThan(0);
      expect(storageData.amenities.length).toBeGreaterThan(0);
      expect(storageData.taxes.length).toBeGreaterThan(0);
    });

    test('should reset to factory defaults', async () => {
      // First seed sample data
      await app.seedSampleData();
      
      // Verify data exists
      const storageData = await app.getStorageDataSafely();
      expect(storageData.hotel).toBeTruthy();
      expect(storageData.roomTypes.length).toBeGreaterThan(0);
      
      // Reset to defaults
      await app.resetToDefaults();
      
      // Verify everything is cleared
      const resetData = await app.getLocalStorageData();
      expect(resetData).toBeTruthy();
      expect(resetData!.hotel).toBeNull();
      expect(resetData!.roomTypes).toEqual([]);
      expect(resetData!.rooms).toEqual([]);
      expect(resetData!.amenities).toEqual([]);
      expect(resetData!.taxes).toEqual([]);
      expect(resetData!.users).toEqual([]);
      
      // Verify UI reflects the reset
      await app.navigateToDashboard();
      await expect(app.page.locator(':text("Grand Palace")')).not.toBeVisible();
    });

    test('should maintain data integrity after multiple operations', async () => {
      // Perform multiple operations
      await app.seedSampleData();
      
      await app.createRoomType({
        title: 'Custom Room Type',
        accronym: 'CUST',
        noofrooms: 7,
        description: 'Custom room type after seeding'
      });
      
      // Export and re-import to test integrity
      const storageData = await app.getStorageDataSafely();
      const exportedJson = JSON.stringify(storageData);
      
      await app.resetToDefaults();
      await app.importData(exportedJson);
      
      // Verify everything is restored correctly
      const restoredData = await app.getStorageDataSafely();
      expect(restoredData.hotel?.hotelname).toContain('Grand Palace');
      expect(restoredData.roomTypes.some((rt) => rt.title === 'Custom Room Type')).toBe(true);
      
      // Verify outbox operations are also restored
      expect(restoredData.outbox).toBeTruthy();
      expect(restoredData.outbox.operations).toBeInstanceOf(Array);
    });
  });

  test.describe('Data Validation and Error Handling', () => {
    test('should validate required fields when creating entities', async () => {
      await app.navigateToRoomTypes();
      await app.page.click('[data-testid="add-room-type-btn"]');
      
      // Try to save without filling required fields
      await app.page.click('[data-testid="save-room-type-btn"]');
      
      // Should show validation errors
      await expect(app.page.locator('[data-testid="validation-error"]')).toBeVisible();
      
      // Data should not be saved to localStorage
      const storageData = await app.getStorageDataSafely();
      expect(storageData.roomTypes).toHaveLength(0);
    });

    test('should handle localStorage quota exceeded gracefully', async () => {
      // Mock localStorage to simulate quota exceeded
      await app.page.addInitScript(() => {
        const originalSetItem = localStorage.setItem;
        let callCount = 0;
        localStorage.setItem = function(key: string, value: string) {
          callCount++;
          if (callCount > 2) {
            throw new Error('QuotaExceededError');
          }
          return originalSetItem.call(this, key, value);
        };
      });
      
      // Try to create multiple room types
      await app.createRoomType({
        title: 'Room Type 1',
        accronym: 'RT1',
        noofrooms: 1,
        description: 'First room type'
      });
      
      // The app should handle the error gracefully and not crash
      await expect(app.page.locator('body')).toBeVisible(); // App is still responsive
    });

    test('should maintain consistency during concurrent operations', async () => {
      // Simulate rapid consecutive operations
      await Promise.all([
        app.createRoomType({
          title: 'Concurrent Room 1',
          accronym: 'CR1',
          noofrooms: 1,
          description: 'First concurrent room'
        }),
        app.createRoomType({
          title: 'Concurrent Room 2',
          accronym: 'CR2',
          noofrooms: 2,
          description: 'Second concurrent room'
        })
      ]);
      
      // Both room types should be created with unique IDs
      const storageData = await app.getStorageDataSafely();
      expect(storageData.roomTypes).toHaveLength(2);
      
      const ids = storageData.roomTypes.map((rt) => rt.id);
      expect(new Set(ids).size).toBe(2); // All IDs should be unique
    });
  });
});

test.describe('Performance Tests', () => {
  let app: HotelAdminApp;

  test.beforeEach(async ({ page }) => {
    app = new HotelAdminApp(page);
    await app.goto();
    await app.clearLocalStorage();
  });

  test('should handle large datasets efficiently', async () => {
    // Create a large dataset
    const largeDataset = {
      hotel: {
        id: 1,
        compid: 1,
        hotelname: 'Large Hotel',
        status: 'Active',
        createdby: 1,
        modifiedby: 1
      },
      roomTypes: Array.from({ length: 100 }, (_, i) => ({
        id: i + 1,
        hotelid: 1,
        title: `Room Type ${i + 1}`,
        roomtypename: `Room Type ${i + 1}`,
        accronym: `RT${i + 1}`,
        noofrooms: 10,
        image: `room${i + 1}.jpg`,
        description: `Room type number ${i + 1}`,
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
      })),
      rooms: [],
      ratePlans: [],
      taxes: [],
      amenities: [],
      users: [],
      policies: { cancellation: [], booking: [] },
      outbox: {
        operations: [],
        lastSyncAttempt: undefined,
        lastSuccessfulSync: undefined,
        summary: { totalOperations: 0, pendingOperations: 0, failedOperations: 0, syncedOperations: 0 }
      },
      lastModified: new Date().toISOString(),
      version: '1.0.0'
    };
    
    const startTime = Date.now();
    
    // Import large dataset
    await app.importData(JSON.stringify(largeDataset));
    
    // Navigate to room types page
    await app.navigateToRoomTypes();
    
    // Wait for rendering
    await app.page.waitForTimeout(2000);
    
    const endTime = Date.now();
    const loadTime = endTime - startTime;
    
    // Should load within reasonable time (less than 10 seconds)
    expect(loadTime).toBeLessThan(10000);
    
    // Verify data is loaded
    const storageData = await app.getStorageDataSafely();
    expect(storageData.roomTypes).toHaveLength(100);
  });

  test('should maintain performance with many outbox operations', async () => {
    // Create many operations to test outbox performance
    for (let i = 0; i < 50; i++) {
      await app.createRoomType({
        title: `Performance Room ${i}`,
        accronym: `PR${i}`,
        noofrooms: 1,
        description: `Performance test room ${i}`
      });
    }
    
    // Check outbox performance
    const startTime = Date.now();
    const operationCount = await app.getOutboxOperationCount();
    const endTime = Date.now();
    
    expect(operationCount).toBe(50);
    expect(endTime - startTime).toBeLessThan(1000); // Should be fast
    
    // Test sync performance
    const syncStartTime = Date.now();
    await app.simulateSync();
    const syncEndTime = Date.now();
    
    expect(syncEndTime - syncStartTime).toBeLessThan(5000); // Should complete within 5 seconds
  });
});
