import { Component, inject, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HotelStore } from '../../../services/hotel-store.service';
import { EntityId } from '../../../models/base.model';
import { RatePlan, RoomTypeRate } from '../../../models/rate-plan.model';

@Component({
  selector: 'app-rate-plans',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSnackBarModule,
    MatCheckboxModule,
  ],
  templateUrl: './rate-plans.html',
  styleUrls: ['./rate-plans.scss'],
})
export class RatePlansComponent {
  private fb = inject(FormBuilder);
  public store = inject(HotelStore);
  private snackBar = inject(MatSnackBar);

  ratePlans = computed(() => this.store.ratePlans());
  roomTypes = computed(() => this.store.roomTypes());
  taxes = computed(() => this.store.taxes());

  displayedColumns = ['code', 'name', 'roomTypes', 'taxes', 'actions'];
  saving = signal(false);
  editing = signal<RatePlan | null>(null);

  form: FormGroup = this.fb.group({
    code: ['', Validators.required],
    shortName: ['', Validators.required],
    // Replace single rate controls with FormArray of rates
    rates: this.fb.array([this.newRateGroup()]),
    taxInclusive: [false],
    applicableTaxIds: [[] as EntityId[]],
  });

  // Getter for rates FormArray
  get ratesFA(): FormArray<FormGroup> {
    return this.form.get('rates') as FormArray<FormGroup>;
  }

  // Factory for a rate group
  newRateGroup(): FormGroup {
    return this.fb.group({
      roomTypeId: ['', Validators.required],
      baseRate: [0, [Validators.required, Validators.min(0)]],
      currency: ['USD', Validators.required],
    });
  }

  addRate(): void {
    this.ratesFA.push(this.newRateGroup());
  }

  removeRate(index: number): void {
    if (this.ratesFA.length > 1) {
      this.ratesFA.removeAt(index);
    }
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    const v = this.form.value as {
      code: string;
      shortName: string;
      rates: { roomTypeId: EntityId; baseRate: number; currency: string }[];
      taxInclusive: boolean;
      applicableTaxIds: EntityId[];
    };

    const now = new Date();
    const hotel = this.store.hotel();

    const rates: RoomTypeRate[] = (v.rates ?? []).map((r) => ({
      roomTypeId: r.roomTypeId,
      baseRate: r.baseRate,
      currency: r.currency,
    }));

    if (this.editing()) {
      const patch: Partial<RatePlan> = {
        updatedAt: now,
        code: v.code,
        name: v.shortName,
        shortName: v.shortName,
        baseCurrency: rates[0]?.currency || 'USD',
        rateStructure: { type: 'flat', baseRate: rates[0]?.baseRate ?? 0 },
        rates,
        taxInclusive: v.taxInclusive,
        applicableTaxIds: v.applicableTaxIds ?? [],
      };
      const res = this.store.updateRatePlan(
        this.editing()!.id as EntityId,
        patch,
      );
      this.saving.set(false);
      if (res.ok) {
        this.snackBar.open('Rate plan updated', 'Close', { duration: 2500 });
        this.cancelEdit();
      } else {
        this.snackBar.open(
          res.errors?.[0] ?? 'Failed to update rate plan',
          'Close',
          { duration: 3500 },
        );
      }
      return;
    }

    const rp: RatePlan = {
      id: '' as EntityId,
      createdAt: now,
      updatedAt: now,
      status: 'active',
      code: v.code,
      name: v.shortName,
      hotelId: hotel?.id ?? ('' as EntityId),
      sortOrder: 0,

      shortName: v.shortName,
      category: 'standard',
      planType: 'room-only',

      isActive: true,
      isWebBookable: true,
      isPublic: true,

      validFrom: now,
      validTo: new Date(now.getFullYear() + 1, now.getMonth(), now.getDate()),
      blackoutDates: [],

      minStayDuration: 1,
      occupancyRules: [],

      baseCurrency: rates[0]?.currency || 'USD',
      rateStructure: { type: 'flat', baseRate: rates[0]?.baseRate ?? 0 },
      rates,

      inclusions: [],
      addOns: [],

      taxInclusive: v.taxInclusive,
      applicableTaxIds: v.applicableTaxIds ?? [],

      marketingInfo: { highlights: [] },
      channelSettings: { directBooking: true, ota: true, gds: false },
    } as RatePlan;

    const res = this.store.addRatePlan(rp);
    this.saving.set(false);
    if (res.ok) {
      this.snackBar.open('Rate plan added', 'Close', { duration: 2500 });
      this.form.reset({ taxInclusive: false, applicableTaxIds: [] });
      this.form.setControl('rates', this.fb.array([this.newRateGroup()]));
    } else {
      this.snackBar.open(
        res.errors?.[0] ?? 'Failed to add rate plan',
        'Close',
        { duration: 3500 },
      );
    }
  }

  editRatePlan(rp: RatePlan): void {
    this.editing.set(rp);
    const defaultRate: RoomTypeRate = {
      roomTypeId: '' as EntityId,
      baseRate: 0,
      currency: rp.baseCurrency || 'USD',
    };
    const groups = (rp.rates && rp.rates.length ? rp.rates : [defaultRate]).map(
      (r) =>
        this.fb.group({
          roomTypeId: [r.roomTypeId || ('' as EntityId), Validators.required],
          baseRate: [r.baseRate || 0, [Validators.required, Validators.min(0)]],
          currency: [
            r.currency || rp.baseCurrency || 'USD',
            Validators.required,
          ],
        }),
    );
    this.form.patchValue({
      code: rp.code,
      shortName: rp.shortName || rp.name,
      taxInclusive: rp.taxInclusive,
      applicableTaxIds: rp.applicableTaxIds ?? [],
    });
    this.form.setControl('rates', this.fb.array(groups));
  }

  cancelEdit(): void {
    this.editing.set(null);
    this.form.reset({ taxInclusive: false, applicableTaxIds: [] });
    this.form.setControl('rates', this.fb.array([this.newRateGroup()]));
  }

  resetForm(): void {
    this.form.reset({ taxInclusive: false, applicableTaxIds: [] });
    this.form.setControl('rates', this.fb.array([this.newRateGroup()]));
  }

  deleteRatePlan(id: EntityId): void {
    if (!confirm('Delete this rate plan?')) return;
    const res = this.store.removeRatePlan(id);
    if (res.ok) {
      this.snackBar.open('Rate plan deleted', 'Close', { duration: 2500 });
    } else {
      this.snackBar.open(
        res.errors?.[0] ?? 'Failed to delete rate plan',
        'Close',
        {
          duration: 3500,
        },
      );
    }
  }

  roomTypeName(id: EntityId): string {
    const rt = this.store.roomTypes().find((x) => x.id === id);
    return rt ? rt.name : '-';
  }

  taxName(id: EntityId): string {
    const t = this.store.taxes().find((x) => x.id === id);
    return t ? t.name : '-';
  }

  roomTypesFor(rp: RatePlan): string {
    return (rp.rates ?? [])
      .map((x) => this.roomTypeName(x.roomTypeId))
      .join(', ');
  }

  taxesFor(rp: RatePlan): string {
    return (
      (rp.applicableTaxIds ?? []).map((x) => this.taxName(x)).join(', ') || '-'
    );
  }
}
