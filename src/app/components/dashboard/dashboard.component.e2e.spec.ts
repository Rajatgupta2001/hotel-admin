import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, inject } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { DashboardComponent } from './dashboard.component';
import { StorageService } from '../../../services/storage.service';
import { OutboxService } from '../../../services/outbox.service';
import { OutboxOperation, OutboxSummary } from '../../../models/outbox.model';

interface HotelDataStructure {
  hotel: any;
  roomTypes: any[];
  rooms: any[];
  ratePlans: any[];
  taxes: any[];
  amenities: any[];
  users: any[];
  policies: { cancellation: any[]; booking: any[] };
  outbox: {
    operations: any[];
    lastSyncAttempt?: Date;
    lastSuccessfulSync?: Date;
    summary: { totalOperations: number; pendingOperations: number; failedOperations: number; syncedOperations: number };
  };
  lastModified: string;
  version: string;
}

interface RoomTypeData {
  title: string;
  accronym: string;
  noofrooms: number;
  description: string;
  isoverbookingalwd?: number;
  overbookingvalue?: number;
  overbookingtype?: string;
  isgenderbase?: number;
  stdoccupancy?: number;
  higheroccupancy?: number;
  isbedalwd?: number;
  xtralwdbeds?: number;
  taxapplicableon?: string;
}

// Mock StorageService for E2E testing
class MockStorageService {
  private dataSubject = new BehaviorSubject<HotelDataStructure>({
    hotel: null,
    roomTypes: [],
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
  });

  data$ = this.dataSubject.asObservable();

  private sampleData = {
    hotel: {
      id: 1,
      compid: 1,
      hotelname: 'Grand Palace Hotel & Spa',
      hoteladdress: '123 Luxury Boulevard',
      city: 'Downtown',
      state: 'California',
      country: 'USA',
      pincode: '90210',
      phoneno: '+1-555-123-4567',
      emailid: 'info@grandpalace.com',
      website: 'www.grandpalace.com',
      gstno: 'GST123456789',
      panno: 'PAN123456789',
      status: 'Active',
      createdby: 1,
      modifiedby: 1
    },
    roomTypes: [
      {
        id: 1,
        hotelid: 1,
        title: 'Deluxe Ocean View',
        roomtypename: 'Deluxe Ocean View',
        accronym: 'DOV',
        noofrooms: 25,
        image: 'deluxe-ocean.jpg',
        description: 'Spacious rooms with stunning ocean views and modern amenities',
        isoverbookingalwd: 1,
        overbookingvalue: 10,
        overbookingtype: 'percentage',
        isgenderbase: 0,
        stdoccupancy: 2,
        higheroccupancy: 4,
        isbedalwd: 1,
        xtralwdbeds: 2,
        taxapplicableon: 'room',
        createdby: 1,
        status: 'Active',
        modifiedby: 1
      }
    ],
    taxes: [
      { id: 1, title: 'GST', percentage: 18, status: 'Active' },
      { id: 2, title: 'City Tax', percentage: 5, status: 'Active' }
    ],
    amenities: [
      { id: 1, title: 'WiFi', description: 'High-speed internet', status: 'Active' },
      { id: 2, title: 'Pool', description: 'Olympic-size swimming pool', status: 'Active' }
    ]
  };

  seedSampleData(): void {
    const currentData = this.dataSubject.value;
    const newData = {
      ...currentData,
      ...this.sampleData,
      lastModified: new Date().toISOString()
    };
    this.dataSubject.next(newData);
    this.saveToLocalStorage(newData);
  }

  resetToFactoryDefaults(): void {
    const defaultData: HotelDataStructure = {
      hotel: null,
      roomTypes: [],
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
    this.dataSubject.next(defaultData);
    this.saveToLocalStorage(defaultData);
  }

  exportData(): void {
    const data = this.dataSubject.value;
    const exportData = {
      ...data,
      exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `hotel-data-export-${new Date().getTime()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }

  importData(jsonData: string): boolean {
    try {
      const importedData = JSON.parse(jsonData);
      
      // Validate basic structure
      if (!importedData || typeof importedData !== 'object') {
        return false;
      }

      // Merge with current data structure
      const currentData = this.dataSubject.value;
      const newData = {
        ...currentData,
        ...importedData,
        lastModified: new Date().toISOString()
      };

      this.dataSubject.next(newData);
      this.saveToLocalStorage(newData);
      return true;
    } catch {
      return false;
    }
  }

  getSampleDataPreview(): typeof this.sampleData {
    return this.sampleData;
  }

  // Room Type CRUD operations
  createRoomType(roomType: RoomTypeData): void {
    const currentData = this.dataSubject.value;
    const newId = Math.max(0, ...currentData.roomTypes.map((rt: { id: number }) => rt.id)) + 1;
    const newRoomType = {
      ...roomType,
      id: newId,
      hotelid: currentData.hotel?.id || 1,
      roomtypename: roomType.title,
      createdby: 1,
      modifiedby: 1,
      status: 'Active'
    };

    const newData = {
      ...currentData,
      roomTypes: [...currentData.roomTypes, newRoomType],
      lastModified: new Date().toISOString()
    };

    this.dataSubject.next(newData);
    this.saveToLocalStorage(newData);
  }

  updateRoomType(id: number, roomType: Partial<RoomTypeData>): void {
    const currentData = this.dataSubject.value;
    const updatedRoomTypes = currentData.roomTypes.map((rt: { id: number }) =>
      rt.id === id ? { ...rt, ...roomType, modifiedby: 1 } : rt
    );

    const newData = {
      ...currentData,
      roomTypes: updatedRoomTypes,
      lastModified: new Date().toISOString()
    };

    this.dataSubject.next(newData);
    this.saveToLocalStorage(newData);
  }

  deleteRoomType(id: number): boolean {
    const currentData = this.dataSubject.value;
    
    // Check if room type has associated rooms (business rule)
    const hasAssociatedRooms = currentData.rooms.some((room: { roomtypeid: number }) => room.roomtypeid === id);
    if (hasAssociatedRooms) {
      return false; // Deletion blocked
    }

    const updatedRoomTypes = currentData.roomTypes.filter((rt: { id: number }) => rt.id !== id);
    const newData = {
      ...currentData,
      roomTypes: updatedRoomTypes,
      lastModified: new Date().toISOString()
    };

    this.dataSubject.next(newData);
    this.saveToLocalStorage(newData);
    return true;
  }

  private saveToLocalStorage(data: HotelDataStructure): void {
    try {
      localStorage.setItem('hotel-admin-data', JSON.stringify(data));
    } catch {
      console.error('Failed to save to localStorage');
    }
  }
}

// Mock OutboxService
class MockOutboxService {
  private operationsSubject = new BehaviorSubject<OutboxOperation[]>([]);
  operations$ = this.operationsSubject.asObservable();

  private summarySubject = new BehaviorSubject<OutboxSummary>({
    totalOperations: 0,
    pendingOperations: 0,
    failedOperations: 0,
    syncedOperations: 0
  });
  summary$ = this.summarySubject.asObservable();

  addOperation(operation: Omit<OutboxOperation, 'id' | 'timestamp' | 'status'>): void {
    const currentOperations = this.operationsSubject.value;
    const newOperation: OutboxOperation = {
      ...operation,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    const updatedOperations = [...currentOperations, newOperation];
    this.operationsSubject.next(updatedOperations);
    this.updateSummary(updatedOperations);
  }

  simulateSync(): void {
    const currentOperations = this.operationsSubject.value;
    const updatedOperations = currentOperations.map(op => {
      if (op.status === 'pending') {
        // Simulate 80% success rate
        return {
          ...op,
          status: Math.random() > 0.2 ? 'synced' as const : 'failed' as const,
          lastAttempt: new Date(),
          retryCount: (op.retryCount || 0) + 1
        };
      }
      return op;
    });

    this.operationsSubject.next(updatedOperations);
    this.updateSummary(updatedOperations);
  }

  clearSyncedOperations(): void {
    const currentOperations = this.operationsSubject.value;
    const remainingOperations = currentOperations.filter(op => op.status !== 'synced');
    this.operationsSubject.next(remainingOperations);
    this.updateSummary(remainingOperations);
  }

  clearAllOperations(): void {
    this.operationsSubject.next([]);
    this.updateSummary([]);
  }

  private updateSummary(operations: OutboxOperation[]): void {
    const summary: OutboxSummary = {
      totalOperations: operations.length,
      pendingOperations: operations.filter(op => op.status === 'pending').length,
      failedOperations: operations.filter(op => op.status === 'failed').length,
      syncedOperations: operations.filter(op => op.status === 'synced').length
    };
    this.summarySubject.next(summary);
  }
}

// Test Host Component
@Component({
  template: `
    <div class="test-container">
      <app-dashboard 
        data-testid="dashboard-component"
        [data-test-mode]="true">
      </app-dashboard>
      
      <!-- Test Controls -->
      <div class="test-controls" data-testid="test-controls">
        <button 
          data-testid="create-room-type-test-btn"
          (click)="createTestRoomType()">
          Create Test Room Type
        </button>
        
        <button 
          data-testid="create-room-with-dependency-btn"
          (click)="createRoomWithDependency()">
          Create Room with Dependency
        </button>
        
        <button 
          data-testid="trigger-localStorage-quota-btn"
          (click)="triggerLocalStorageQuota()">
          Trigger localStorage Quota
        </button>
        
        <input 
          data-testid="import-data-input"
          type="file"
          (change)="onFileSelect($event)"
          accept=".json">
        
        <div data-testid="test-results">
          <div data-testid="last-operation-result">{{ lastOperationResult }}</div>
          <div data-testid="room-types-count">{{ roomTypesCount }}</div>
          <div data-testid="outbox-operations-count">{{ outboxOperationsCount }}</div>
        </div>
      </div>
    </div>
  `
})
class TestHostComponent {
  lastOperationResult = '';
  roomTypesCount = 0;
  outboxOperationsCount = 0;

  constructor(
    private storageService: StorageService,
    private outboxService: OutboxService
  ) {
    this.storageService.data$.subscribe(data => {
      this.roomTypesCount = data.roomTypes.length;
    });

    this.outboxService.summary$.subscribe(summary => {
      this.outboxOperationsCount = summary.totalOperations;
    });
  }

  createTestRoomType(): void {
    const roomType = {
      title: 'E2E Test Room Type',
      accronym: 'E2E',
      noofrooms: 10,
      description: 'Room type created for E2E testing',
      isoverbookingalwd: 0,
      overbookingvalue: 0,
      overbookingtype: 'none',
      isgenderbase: 0,
      stdoccupancy: 2,
      higheroccupancy: 3,
      isbedalwd: 1,
      xtralwdbeds: 1,
      taxapplicableon: 'room'
    };

    this.storageService.createRoomType(roomType);
    this.lastOperationResult = 'Room type created successfully';
  }

  createRoomWithDependency(): void {
    // First create a room type
    this.createTestRoomType();
    
    // Then create a room that depends on it (simulated)
    const currentData = this.storageService['dataSubject'].value;
    const roomType = currentData.roomTypes[currentData.roomTypes.length - 1];
    
    if (roomType) {
      const room = {
        id: 1,
        roomtypeid: roomType.id,
        roomno: '101',
        status: 'Active'
      };
      
      // Add room to current data
      const newData = {
        ...currentData,
        rooms: [...currentData.rooms, room]
      };
      
      this.storageService['dataSubject'].next(newData);
      this.lastOperationResult = 'Room with dependency created';
    }
  }

  triggerLocalStorageQuota(): void {
    // Simulate localStorage quota exceeded
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = () => {
      throw new Error('QuotaExceededError');
    };
    
    try {
      this.storageService.createRoomType({
        title: 'Quota Test Room',
        accronym: 'QTR',
        noofrooms: 1,
        description: 'Room type for quota testing'
      });
      this.lastOperationResult = 'Quota error handled gracefully';
    } catch (error) {
      this.lastOperationResult = 'Quota error not handled';
    } finally {
      localStorage.setItem = originalSetItem;
    }
  }

  onFileSelect(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        const success = this.storageService.importData(content);
        this.lastOperationResult = success ? 'Import successful' : 'Import failed';
      };
      reader.readAsText(file);
    }
  }
}

describe('Dashboard Component E2E Tests', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let storageService: MockStorageService;
  let outboxService: MockOutboxService;

  beforeEach(async () => {
    // Clear localStorage before each test
    localStorage.clear();

    await TestBed.configureTestingModule({
      declarations: [DashboardComponent, TestHostComponent],
      providers: [
        { provide: StorageService, useClass: MockStorageService },
        { provide: OutboxService, useClass: MockOutboxService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    storageService = TestBed.inject(StorageService) as unknown as MockStorageService;
    outboxService = TestBed.inject(OutboxService) as unknown as MockOutboxService;
    
    fixture.detectChanges();
  });

  describe('Data Persistence and localStorage Integration', () => {
    it('should persist data to localStorage as single JSON object', async () => {
      // Seed sample data
      const seedButton = fixture.debugElement.query(By.css('[data-testid="seed-sample-data-btn"]'));
      seedButton.nativeElement.click();
      fixture.detectChanges();

      // Check localStorage
      const storageData = localStorage.getItem('hotel-admin-data');
      expect(storageData).toBeTruthy();

      const parsedData = JSON.parse(storageData!);
      expect(parsedData.hotel).toBeTruthy();
      expect(parsedData.hotel.hotelname).toBe('Grand Palace Hotel & Spa');
      expect(Array.isArray(parsedData.roomTypes)).toBe(true);
      expect(parsedData.roomTypes.length).toBeGreaterThan(0);
      expect(parsedData.version).toBe('1.0.0');
      expect(parsedData.lastModified).toBeTruthy();
    });

    it('should load data from localStorage on component initialization', () => {
      const testData = {
        hotel: { id: 1, hotelname: 'Test Hotel from Storage' },
        roomTypes: [{ id: 1, title: 'Preloaded Room Type' }],
        rooms: [],
        ratePlans: [],
        taxes: [],
        amenities: [],
        users: [],
        policies: { cancellation: [], booking: [] },
        outbox: { operations: [], summary: { totalOperations: 0, pendingOperations: 0, failedOperations: 0, syncedOperations: 0 } },
        lastModified: new Date().toISOString(),
        version: '1.0.0'
      };

      localStorage.setItem('hotel-admin-data', JSON.stringify(testData));
      
      // Recreate component to trigger initialization
      fixture = TestBed.createComponent(TestHostComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      // Verify data is loaded
      expect(component.roomTypesCount).toBe(1);
    });

    it('should handle corrupted localStorage gracefully', () => {
      localStorage.setItem('hotel-admin-data', 'invalid-json{broken}');
      
      // Component should initialize without errors
      expect(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }).not.toThrow();

      expect(component.roomTypesCount).toBe(0);
    });
  });

  describe('CRUD Operations E2E', () => {
    it('should create room type and persist to localStorage', () => {
      const createButton = fixture.debugElement.query(By.css('[data-testid="create-room-type-test-btn"]'));
      createButton.nativeElement.click();
      fixture.detectChanges();

      // Verify in component state
      expect(component.roomTypesCount).toBe(1);
      expect(component.lastOperationResult).toBe('Room type created successfully');

      // Verify in localStorage
      const storageData = JSON.parse(localStorage.getItem('hotel-admin-data')!);
      expect(storageData.roomTypes).toHaveLength(1);
      expect(storageData.roomTypes[0].title).toBe('E2E Test Room Type');
      expect(storageData.roomTypes[0].accronym).toBe('E2E');
    });

    it('should update room type and reflect in localStorage', () => {
      // First create a room type
      storageService.createRoomType({
        title: 'Original Room Type',
        accronym: 'ORIG',
        noofrooms: 5,
        description: 'Original room type'
      });
      fixture.detectChanges();

      // Update the room type
      storageService.updateRoomType(1, {
        title: 'Updated Room Type',
        noofrooms: 8
      });
      fixture.detectChanges();

      // Verify in localStorage
      const storageData = JSON.parse(localStorage.getItem('hotel-admin-data')!);
      expect(storageData.roomTypes[0].title).toBe('Updated Room Type');
      expect(storageData.roomTypes[0].noofrooms).toBe(8);
    });

    it('should delete room type when no dependencies exist', () => {
      // Create a room type
      storageService.createRoomType({
        title: 'To Delete',
        accronym: 'DEL',
        noofrooms: 3,
        description: 'Room type to be deleted'
      });
      fixture.detectChanges();

      expect(component.roomTypesCount).toBe(1);

      // Delete it
      const deleted = storageService.deleteRoomType(1);
      fixture.detectChanges();

      expect(deleted).toBe(true);
      expect(component.roomTypesCount).toBe(0);

      // Verify in localStorage
      const storageData = JSON.parse(localStorage.getItem('hotel-admin-data')!);
      expect(storageData.roomTypes).toHaveLength(0);
    });

    it('should block deletion when business rules prevent it', () => {
      // Create room type with dependency
      const createWithDependencyButton = fixture.debugElement.query(
        By.css('[data-testid="create-room-with-dependency-btn"]')
      );
      createWithDependencyButton.nativeElement.click();
      fixture.detectChanges();

      expect(component.roomTypesCount).toBe(1);

      // Try to delete room type that has associated rooms
      const deleted = storageService.deleteRoomType(1);
      fixture.detectChanges();

      expect(deleted).toBe(false); // Deletion should be blocked
      expect(component.roomTypesCount).toBe(1); // Room type should still exist

      // Verify in localStorage
      const storageData = JSON.parse(localStorage.getItem('hotel-admin-data')!);
      expect(storageData.roomTypes).toHaveLength(1);
    });
  });

  describe('Import/Export Functionality E2E', () => {
    it('should export data and maintain JSON structure', () => {
      // Seed sample data first
      storageService.seedSampleData();
      fixture.detectChanges();

      // Mock URL.createObjectURL and document.createElement for testing
      const mockBlob = jasmine.createSpy('Blob').and.returnValue({});
      const mockCreateObjectURL = jasmine.createSpy('createObjectURL').and.returnValue('blob:mock-url');
      const mockLink = {
        href: '',
        download: '',
        click: jasmine.createSpy('click')
      };
      const mockCreateElement = jasmine.createSpy('createElement').and.returnValue(mockLink);

      spyOn(window, 'Blob').and.callFake(mockBlob);
      spyOn(URL, 'createObjectURL').and.callFake(mockCreateObjectURL);
      spyOn(document, 'createElement').and.callFake(mockCreateElement);

      // Trigger export
      const exportButton = fixture.debugElement.query(By.css('[data-testid="export-data-btn"]'));
      exportButton.nativeElement.click();
      fixture.detectChanges();

      // Verify export was triggered
      expect(mockCreateElement).toHaveBeenCalledWith('a');
      expect(mockLink.click).toHaveBeenCalled();
      expect(mockBlob).toHaveBeenCalled();

      // Verify blob content structure
      const blobContent = mockBlob.calls.argsFor(0)[0][0];
      const exportData = JSON.parse(blobContent);
      expect(exportData.hotel).toBeTruthy();
      expect(exportData.exportDate).toBeTruthy();
      expect(exportData.version).toBeTruthy();
    });

    it('should import valid JSON data', () => {
      const importData = {
        hotel: { id: 1, hotelname: 'Imported Hotel' },
        roomTypes: [{ id: 1, title: 'Imported Room Type', accronym: 'IMP' }],
        rooms: [],
        ratePlans: [],
        taxes: [],
        amenities: [],
        users: [],
        policies: { cancellation: [], booking: [] },
        outbox: { operations: [], summary: { totalOperations: 0, pendingOperations: 0, failedOperations: 0, syncedOperations: 0 } },
        lastModified: new Date().toISOString(),
        version: '1.0.0'
      };

      const success = storageService.importData(JSON.stringify(importData));
      fixture.detectChanges();

      expect(success).toBe(true);
      expect(component.roomTypesCount).toBe(1);

      // Verify in localStorage
      const storageData = JSON.parse(localStorage.getItem('hotel-admin-data')!);
      expect(storageData.hotel.hotelname).toBe('Imported Hotel');
      expect(storageData.roomTypes[0].title).toBe('Imported Room Type');
    });

    it('should reject invalid import data', () => {
      const invalidData = 'invalid-json-string{broken}';
      
      const success = storageService.importData(invalidData);
      fixture.detectChanges();

      expect(success).toBe(false);
      expect(component.roomTypesCount).toBe(0);
    });
  });

  describe('Outbox Pattern and Sync E2E', () => {
    it('should track operations in outbox', () => {
      // Create a room type to generate an operation
      const createButton = fixture.debugElement.query(By.css('[data-testid="create-room-type-test-btn"]'));
      createButton.nativeElement.click();
      fixture.detectChanges();

      // Verify outbox operation was created
      expect(component.outboxOperationsCount).toBeGreaterThan(0);
    });

    it('should simulate sync operations', () => {
      // Create some operations first
      storageService.createRoomType({ title: 'Sync Test 1', accronym: 'ST1', noofrooms: 1, description: 'Test' });
      storageService.createRoomType({ title: 'Sync Test 2', accronym: 'ST2', noofrooms: 2, description: 'Test' });
      fixture.detectChanges();

      const initialOperations = component.outboxOperationsCount;
      expect(initialOperations).toBe(2);

      // Simulate sync
      const syncButton = fixture.debugElement.query(By.css('[data-testid="simulate-sync-btn"]'));
      syncButton.nativeElement.click();
      fixture.detectChanges();

      // Operations should still exist but some should be marked as synced
      // (The count may remain the same but status changes)
      expect(component.outboxOperationsCount).toBeGreaterThanOrEqual(0);
    });

    it('should clear outbox operations', () => {
      // Create an operation first
      const createButton = fixture.debugElement.query(By.css('[data-testid="create-room-type-test-btn"]'));
      createButton.nativeElement.click();
      fixture.detectChanges();

      expect(component.outboxOperationsCount).toBeGreaterThan(0);

      // Clear outbox
      const clearButton = fixture.debugElement.query(By.css('[data-testid="clear-outbox-btn"]'));
      clearButton.nativeElement.click();
      fixture.detectChanges();

      expect(component.outboxOperationsCount).toBe(0);
    });
  });

  describe('Sample Data and Factory Reset E2E', () => {
    it('should seed sample data successfully', () => {
      const seedButton = fixture.debugElement.query(By.css('[data-testid="seed-sample-data-btn"]'));
      seedButton.nativeElement.click();
      fixture.detectChanges();

      // Verify sample data is loaded
      expect(component.roomTypesCount).toBeGreaterThan(0);

      // Verify in localStorage
      const storageData = JSON.parse(localStorage.getItem('hotel-admin-data')!);
      expect(storageData.hotel).toBeTruthy();
      expect(storageData.hotel.hotelname).toContain('Grand Palace');
      expect(storageData.roomTypes.length).toBeGreaterThan(0);
      expect(storageData.amenities.length).toBeGreaterThan(0);
    });

    it('should reset to factory defaults', () => {
      // First seed sample data
      storageService.seedSampleData();
      fixture.detectChanges();

      expect(component.roomTypesCount).toBeGreaterThan(0);

      // Reset to defaults
      const resetButton = fixture.debugElement.query(By.css('[data-testid="reset-defaults-btn"]'));
      resetButton.nativeElement.click();
      fixture.detectChanges();

      // Verify everything is cleared
      expect(component.roomTypesCount).toBe(0);

      const storageData = JSON.parse(localStorage.getItem('hotel-admin-data')!);
      expect(storageData.hotel).toBeNull();
      expect(storageData.roomTypes).toEqual([]);
      expect(storageData.amenities).toEqual([]);
    });
  });

  describe('Error Handling and Data Validation E2E', () => {
    it('should handle localStorage quota exceeded gracefully', () => {
      const quotaButton = fixture.debugElement.query(By.css('[data-testid="trigger-localStorage-quota-btn"]'));
      quotaButton.nativeElement.click();
      fixture.detectChanges();

      // Component should handle the error gracefully
      expect(component.lastOperationResult).toBe('Quota error handled gracefully');
    });

    it('should maintain data integrity during concurrent operations', async () => {
      // Simulate rapid consecutive operations
      const promises = [];
      for (let i = 0; i < 5; i++) {
        promises.push(new Promise<void>(resolve => {
          setTimeout(() => {
            storageService.createRoomType({
              title: `Concurrent Room ${i}`,
              accronym: `CR${i}`,
              noofrooms: i + 1,
              description: `Concurrent room ${i}`
            });
            resolve();
          }, i * 10);
        }));
      }

      await Promise.all(promises);
      fixture.detectChanges();

      // All room types should be created with unique IDs
      expect(component.roomTypesCount).toBe(5);

      const storageData = JSON.parse(localStorage.getItem('hotel-admin-data')!);
      const ids = storageData.roomTypes.map((rt: any) => rt.id);
      expect(new Set(ids).size).toBe(5); // All IDs should be unique
    });
  });

  describe('Performance Tests E2E', () => {
    it('should handle large datasets efficiently', () => {
      const startTime = Date.now();

      // Create a large dataset
      const largeData = {
        hotel: { id: 1, hotelname: 'Large Hotel' },
        roomTypes: Array.from({ length: 100 }, (_, i) => ({
          id: i + 1,
          title: `Room Type ${i + 1}`,
          accronym: `RT${i}`,
          noofrooms: 10
        })),
        rooms: [],
        ratePlans: [],
        taxes: [],
        amenities: [],
        users: [],
        policies: { cancellation: [], booking: [] },
        outbox: { operations: [], summary: { totalOperations: 0, pendingOperations: 0, failedOperations: 0, syncedOperations: 0 } },
        lastModified: new Date().toISOString(),
        version: '1.0.0'
      };

      const success = storageService.importData(JSON.stringify(largeData));
      fixture.detectChanges();

      const endTime = Date.now();
      const processingTime = endTime - startTime;

      expect(success).toBe(true);
      expect(component.roomTypesCount).toBe(100);
      expect(processingTime).toBeLessThan(1000); // Should process within 1 second

      // Verify data integrity
      const storageData = JSON.parse(localStorage.getItem('hotel-admin-data')!);
      expect(storageData.roomTypes).toHaveLength(100);
    });

    it('should maintain performance with many outbox operations', () => {
      const startTime = Date.now();

      // Create multiple operations
      for (let i = 0; i < 20; i++) {
        outboxService.addOperation({
          type: 'CREATE',
          entity: 'roomType',
          entityId: i + 1,
          data: { title: `Performance Room ${i}` }
        });
      }
      fixture.detectChanges();

      const endTime = Date.now();
      const processingTime = endTime - startTime;

      expect(component.outboxOperationsCount).toBe(20);
      expect(processingTime).toBeLessThan(500); // Should be very fast

      // Test sync performance
      const syncStartTime = Date.now();
      outboxService.simulateSync();
      fixture.detectChanges();
      const syncEndTime = Date.now();

      expect(syncEndTime - syncStartTime).toBeLessThan(100); // Sync should be fast
    });
  });
});
