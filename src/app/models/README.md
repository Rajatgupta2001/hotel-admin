# Angular TypeScript Models - Improved with Best Practices

Auto-generated TypeScript interfaces from Python SQLAlchemy models for hotel management system.

## 📊 Overview
- **Total Models**: 600+ interfaces  
- **Total Interfaces**: 1,800+ (Main + Create + Update patterns)
- **Generated From**: Python SQLAlchemy models
- **Framework**: Angular-ready TypeScript interfaces with proper typing

## 🎯 TypeScript Best Practices Applied

### ✅ Proper Date Typing
- All datetime fields use `Date` type (not `any`)
- Consistent typing across all models

### ✅ Documentation Without Enforcement  
- Default values documented in comments: `// Default: 0 (backend)`
- Defaults handled by backend/database, not TypeScript
- Clear separation of concerns

### ✅ Clean Interface Structure
```typescript
/**
 * Model documentation with backend context
 */
export interface IModelName {
  id?: number;              // Primary key - auto-generated  
  field: string;            // Required
  optional?: string;        // Optional
  timestamp?: Date;         // Auto-populated timestamp
  userId: number;           // Default: 0 (backend)
}

export interface ICreateModelName {
  // Only fields needed for creation
  field: string;
  optional?: string;
  userId?: number;
}

export interface IUpdateModelName {
  // All fields optional for partial updates
  field?: string;
  optional?: string;
  userId?: number;
}
```

## Key Models

### Core Hotel Management
- `IHotels` - Hotel information and settings
- `IReservations` - Hotel reservations and bookings
- `IRooms` - Room definitions and details
- `IRoomTypes` - Room type configurations
- `IGuests` - Guest information
- `IAgents` - Travel agents and booking agents
- `ICorporates` - Corporate clients

### Financial & Billing
- `IBillingPlans` - Billing plan configurations
- `IBillingAccountStatement` - Account statements
- `IAccountPayment` - Payment records
- `IPosFolios` - Point of sale transactions
- `ITaxMaster` - Tax configurations

### User Management
- `IUsers` - System users
- `IUserTypes` - User role definitions
- `IUserPermissions` - User permission settings

### Configuration
- `IHotelSettings` - Hotel-specific settings
- `ICustomSettings` - Custom configuration options
- `IApiKeys` - API key management

## Usage

### Import Individual Models
```typescript
import { IHotels, IReservations, IGuests } from './models';
```

### Import All Models
```typescript
import * from './models';
```

### Using with Angular Services
```typescript
import { IReservations } from './models';

@Injectable()
export class ReservationService {
  getReservations(): Observable<IReservations[]> {
    return this.http.get<IReservations[]>('/api/reservations');
  }
  
  createReservation(reservation: IReservations): Observable<IReservations> {
    return this.http.post<IReservations>('/api/reservations', reservation);
  }
}
```

### Form Validation
```typescript
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IGuests } from './models';
import { ModelValidators } from './model-utils';

export class GuestFormComponent {
  guestForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.guestForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }
  
  onSubmit(): void {
    if (this.guestForm.valid) {
      const guest: Partial<IGuests> = this.guestForm.value;
      // Process guest data
    }
  }
}
```

## Model Utilities

The `model-utils.ts` file provides helpful utilities:

### Common Interfaces
- `IAuditFields` - Standard audit fields (createdOn, modifiedOn, etc.)
- `IHotelContext` - Hotel and company context
- `IBaseModel` - Combination of audit and hotel context
- `IPaginatedResponse<T>` - Paginated API responses
- `IApiResponse<T>` - Standard API response wrapper

### Utility Functions
- `ModelUtils.toCamelCase()` - Convert snake_case to camelCase
- `ModelUtils.toSnakeCase()` - Convert camelCase to snake_case
- `ModelUtils.isActive()` - Check if model is active
- `ModelUtils.formatDate()` - Format dates for display
- `ModelUtils.cleanModelData()` - Remove null/undefined values
- `ModelUtils.createWithAudit()` - Create model with audit fields
- `ModelUtils.updateWithAudit()` - Update model with audit fields

### Type Guards
- `ModelTypeGuards.hasAuditFields()` - Check for audit fields
- `ModelTypeGuards.hasHotelContext()` - Check for hotel context
- `ModelTypeGuards.isBaseModel()` - Check for base model interface

### Enums
- `ReservationStatus` - Reservation status values
- `PaymentType` - Payment method types
- `CustomerType` - Customer type classifications
- `HotelMode` - Hotel operation modes

### Validators
- `ModelValidators.required()` - Required field validation
- `ModelValidators.email()` - Email format validation
- `ModelValidators.phone()` - Phone number validation
- `ModelValidators.positiveNumber()` - Positive number validation
- `ModelValidators.dateRange()` - Date range validation

## Data Types

### Type Mappings
The following Python SQLAlchemy types were converted to TypeScript:

| Python Type | TypeScript Type |
|-------------|-----------------|
| Integer | number |
| String | string |
| Text | string |
| DateTime | Date |
| Date | Date |
| Time | string |
| DECIMAL | number |
| Float | number |
| Boolean | boolean |
| CHAR | string |
| Enum | string |
| JSON | any |

### Nullable Fields
- Fields marked as `nullable=False` in Python are required (no `?`)
- Fields marked as `nullable=True` or without nullable specification are optional (`?`)

### Relationships
- One-to-many relationships are typed as arrays (e.g., `IHotelSettings[]`)
- Many-to-one relationships are typed as single objects (e.g., `IHotels`)
- All relationships are optional (`?`) to handle lazy loading

## File Structure

```
angular-models/
├── index.ts                          # Main export file
├── model-utils.ts                    # Utility functions and types
├── README.md                         # This documentation
├── acc_stat_trans_taxes.interface.ts
├── account_attributes.interface.ts
├── agents.interface.ts
├── hotels.interface.ts
├── reservations.interface.ts
├── rooms.interface.ts
├── users.interface.ts
└── ... (600+ more interface files)
```

## Examples

### Hotel Information
```typescript
const hotel: IHotels = {
  id: 1,
  compid: 1,
  hotelname: 'Grand Hotel',
  status: 'AC',
  hotelmode: HotelMode.PAID,
  createdby: 1,
  modifiedby: 1
};
```

### Reservation
```typescript
const reservation: IReservations = {
  hotelid: 1,
  rsvtype: 'W',
  rsvdate: new Date(),
  checkindate: new Date(),
  checkintime: '15:00',
  checkoutdate: new Date(Date.now() + 86400000), // Tomorrow
  checkouttime: '11:00',
  duration: 1,
  ownertype: 'G',
  rsvstatus: ReservationStatus.RESERVE
};
```

### Guest with Validation
```typescript
import { ModelValidators } from './model-utils';

const guest: IGuests = {
  hotelid: 1,
  firstname: 'John',
  lastname: 'Doe',
  email: 'john.doe@example.com',
  phone: '+1234567890'
};

// Validate guest data
const isValid = ModelValidators.required(guest.firstname) &&
                ModelValidators.required(guest.lastname) &&
                ModelValidators.email(guest.email) &&
                ModelValidators.phone(guest.phone);
```

## Notes

1. **Date Handling**: Date fields are typed as `Date` but may come from API as ISO strings. Use proper date parsing when needed.

2. **Enums**: Some fields use string literals. Consider creating TypeScript enums for better type safety.

3. **Relationships**: Relationship properties are optional and may not be loaded unless explicitly requested.

4. **Boolean Fields**: Many boolean concepts are represented as integers (0/1) in the original models.

5. **Default Values**: Default values are documented in JSDoc comments where available.

## Migration Notes

When migrating from the Python models:
- Property names changed from snake_case to camelCase
- Interface names prefixed with 'I'
- Relationships use typed interfaces instead of SQLAlchemy relationships
- Some complex Python properties/methods not included (implement in services)

## Contributing

When adding new models or updating existing ones:
1. Follow the existing naming conventions
2. Include proper TypeScript types
3. Add JSDoc comments for default values
4. Update this README if adding significant new patterns
5. Run type checking to ensure no TypeScript errors
