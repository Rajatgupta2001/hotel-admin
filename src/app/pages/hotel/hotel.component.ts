import {
  Component,
  inject,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { HotelStore } from '../../services/hotel-store.service';
import { Hotel } from '../../models/hotel.model';
import { EntityId } from '../../models';

interface HotelFormValue {
  totalrooms: number;
  hotelname: string;
  catid: number | null;
  logoimage: string;
  description: string;
  noofrooms: number | null;
  services: string;
  website: string;
  hotelemailid: string;
  billingcurrency: string;
  longitude: number | null;
  latitude: number | null;
  contactfirstname: string;
  contactlastname: string;
  designation: string;
  contactofficephone: string;
  contactfax: string;
  contactemail: string;
  contactmobile: string;
  compid: number | null;
  status: 'A' | 'I' | 'P';
}

@Component({
  selector: 'app-hotel',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule,
  ],
  template: `
    <div class="max-w-7xl mx-auto h-full">
      <div class="mb-4">
        <h1 class="text-xl font-bold text-gray-900 mb-1">
          Hotel Configuration
        </h1>
        <p class="text-sm text-gray-600">
          Configure your hotel basic information
        </p>
      </div>

      <div class="space-y-4">
        <!-- Form Card -->
        <div>
          <mat-card class="flex flex-col">
            <mat-card-header class="flex-shrink-0 !pb-2">
              <mat-card-title class="flex items-center text-sm font-medium">
                <mat-icon class="mr-2 text-blue-600 !text-lg">hotel</mat-icon>
                Hotel Information
              </mat-card-title>
            </mat-card-header>

            <mat-card-content
              class="flex-1 !pt-0 !pb-2 overflow-y-auto max-h-96"
            >
              @if (formInitialized() && hotelForm) {
                <form
                  [formGroup]="hotelForm"
                  (ngSubmit)="onSubmit()"
                  class="space-y-2"
                >
                  <!-- Basic Information -->
                  <mat-form-field
                    appearance="fill"
                    class="w-full !text-sm"
                    subscriptSizing="dynamic"
                  >
                    <mat-label class="!text-sm"
                      >Name of the Hotel/Property</mat-label
                    >
                    <input
                      matInput
                      formControlName="hotelname"
                      placeholder="Enter hotel name"
                      class="!text-sm !py-1"
                      style="line-height: 1.2;"
                    />
                    <mat-icon matSuffix class="!text-base">business</mat-icon>
                    @if (
                      hotelForm.get('hotelname')?.hasError('required') &&
                      hotelForm.get('hotelname')?.touched
                    ) {
                      <mat-error class="!text-xs"
                        >Hotel name is required</mat-error
                      >
                    }
                  </mat-form-field>

                  <mat-form-field
                    appearance="fill"
                    class="w-full !text-sm"
                    subscriptSizing="dynamic"
                  >
                    <mat-label class="!text-sm">Hotel Code</mat-label>
                    <input
                      matInput
                      formControlName="hotelcode"
                      placeholder="Hotel identifier code"
                      class="!text-sm !py-1"
                      style="line-height: 1.2;"
                    />
                    <mat-icon matSuffix class="!text-base">code</mat-icon>
                  </mat-form-field>

                  <!-- Upload Section -->
                  <div class="grid grid-cols-2 gap-2">
                    <div>
                      <span class="block text-sm font-medium text-gray-700 mb-1"
                        >Upload Company Logo</span
                      >
                      <div
                        class="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center"
                      >
                        <input
                          type="file"
                          accept="image/*"
                          class="hidden"
                          #logoInput
                        />
                        <button
                          type="button"
                          mat-button
                          (click)="logoInput.click()"
                          class="!text-sm"
                        >
                          <mat-icon class="mr-1 !text-base">upload</mat-icon>
                          Choose File
                        </button>
                        <p class="text-xs text-gray-500 mt-1">
                          Image dimensions 254x91 Pixel
                        </p>
                      </div>
                    </div>

                    <div>
                      <span class="block text-sm font-medium text-gray-700 mb-1"
                        >Upload Photos</span
                      >
                      <div
                        class="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center"
                      >
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          class="hidden"
                          #photosInput
                        />
                        <button
                          type="button"
                          mat-button
                          (click)="photosInput.click()"
                          class="!text-sm"
                        >
                          <mat-icon class="mr-1 !text-base"
                            >photo_library</mat-icon
                          >
                          Choose Files
                        </button>
                        <p class="text-xs text-gray-500 mt-1">
                          Image dimensions 254x91 Pixel
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- Address -->
                  <mat-form-field
                    appearance="fill"
                    class="w-full !text-sm"
                    subscriptSizing="dynamic"
                  >
                    <mat-label class="!text-sm">Address</mat-label>
                    <textarea
                      matInput
                      formControlName="address"
                      rows="2"
                      placeholder="Street address"
                      class="!text-sm !leading-tight resize-none"
                      style="line-height: 1.3;"
                    ></textarea>
                    <mat-icon matSuffix class="!text-base"
                      >location_on</mat-icon
                    >
                  </mat-form-field>

                  <!-- Location Details -->
                  <div class="grid grid-cols-2 gap-2">
                    <mat-form-field
                      appearance="fill"
                      class="!text-sm"
                      subscriptSizing="dynamic"
                    >
                      <mat-label class="!text-sm">Country</mat-label>
                      <mat-select formControlName="country" class="!text-sm">
                        <mat-option value="IN" class="!text-sm"
                          >India</mat-option
                        >
                        <mat-option value="US" class="!text-sm"
                          >United States</mat-option
                        >
                        <mat-option value="UK" class="!text-sm"
                          >United Kingdom</mat-option
                        >
                        <mat-option value="AU" class="!text-sm"
                          >Australia</mat-option
                        >
                      </mat-select>
                      <mat-icon matSuffix class="!text-base">flag</mat-icon>
                    </mat-form-field>

                    <mat-form-field
                      appearance="fill"
                      class="!text-sm"
                      subscriptSizing="dynamic"
                    >
                      <mat-label class="!text-sm">State</mat-label>
                      <mat-select formControlName="state" class="!text-sm">
                        <mat-option value="DL" class="!text-sm"
                          >Delhi</mat-option
                        >
                        <mat-option value="MH" class="!text-sm"
                          >Maharashtra</mat-option
                        >
                        <mat-option value="KA" class="!text-sm"
                          >Karnataka</mat-option
                        >
                        <mat-option value="TN" class="!text-sm"
                          >Tamil Nadu</mat-option
                        >
                      </mat-select>
                      <mat-icon matSuffix class="!text-base">map</mat-icon>
                    </mat-form-field>
                  </div>

                  <div class="grid grid-cols-2 gap-2">
                    <mat-form-field
                      appearance="fill"
                      class="!text-sm"
                      subscriptSizing="dynamic"
                    >
                      <mat-label class="!text-sm">City</mat-label>
                      <input
                        matInput
                        formControlName="city"
                        placeholder="City name"
                        class="!text-sm !py-1"
                        style="line-height: 1.2;"
                      />
                      <mat-icon matSuffix class="!text-base"
                        >location_city</mat-icon
                      >
                    </mat-form-field>

                    <mat-form-field
                      appearance="fill"
                      class="!text-sm"
                      subscriptSizing="dynamic"
                    >
                      <mat-label class="!text-sm">Zip Code</mat-label>
                      <input
                        matInput
                        formControlName="zipcode"
                        placeholder="Postal code"
                        class="!text-sm !py-1"
                        style="line-height: 1.2;"
                      />
                      <mat-icon matSuffix class="!text-base"
                        >markunread_mailbox</mat-icon
                      >
                    </mat-form-field>
                  </div>

                  <div class="grid grid-cols-2 gap-2">
                    <mat-form-field
                      appearance="fill"
                      class="!text-sm"
                      subscriptSizing="dynamic"
                    >
                      <mat-label class="!text-sm">Phone</mat-label>
                      <input
                        matInput
                        formControlName="phone"
                        placeholder="Phone number"
                        class="!text-sm !py-1"
                        style="line-height: 1.2;"
                      />
                      <mat-icon matSuffix class="!text-base">phone</mat-icon>
                    </mat-form-field>

                    <mat-form-field
                      appearance="fill"
                      class="!text-sm"
                      subscriptSizing="dynamic"
                    >
                      <mat-label class="!text-sm">Hotel Category</mat-label>
                      <mat-select formControlName="category" class="!text-sm">
                        <mat-option value="5star" class="!text-sm"
                          >5 Star</mat-option
                        >
                        <mat-option value="4star" class="!text-sm"
                          >4 Star</mat-option
                        >
                        <mat-option value="3star" class="!text-sm"
                          >3 Star</mat-option
                        >
                        <mat-option value="budget" class="!text-sm"
                          >Budget</mat-option
                        >
                        <mat-option value="luxury" class="!text-sm"
                          >Luxury</mat-option
                        >
                      </mat-select>
                      <mat-icon matSuffix class="!text-base">star</mat-icon>
                    </mat-form-field>
                  </div>

                  <div class="grid grid-cols-2 gap-2">
                    <mat-form-field
                      appearance="fill"
                      class="!text-sm"
                      subscriptSizing="dynamic"
                    >
                      <mat-label class="!text-sm">Fax</mat-label>
                      <input
                        matInput
                        formControlName="fax"
                        placeholder="Fax number"
                        class="!text-sm !py-1"
                        style="line-height: 1.2;"
                      />
                      <mat-icon matSuffix class="!text-base">fax</mat-icon>
                    </mat-form-field>

                    <mat-form-field
                      appearance="fill"
                      class="!text-sm"
                      subscriptSizing="dynamic"
                    >
                      <mat-label class="!text-sm">Website Address</mat-label>
                      <input
                        matInput
                        formControlName="website"
                        placeholder="https://example.com"
                        class="!text-sm !py-1"
                        style="line-height: 1.2;"
                      />
                      <mat-icon matSuffix class="!text-base">language</mat-icon>
                    </mat-form-field>
                  </div>

                  <mat-form-field
                    appearance="fill"
                    class="w-full !text-sm"
                    subscriptSizing="dynamic"
                  >
                    <mat-label class="!text-sm">Email Address</mat-label>
                    <input
                      matInput
                      formControlName="email"
                      type="email"
                      placeholder="hotel@example.com"
                      class="!text-sm !py-1"
                      style="line-height: 1.2;"
                    />
                    <mat-icon matSuffix class="!text-base">email</mat-icon>
                  </mat-form-field>

                  <!-- Brief Description (Single Language) -->
                  <mat-form-field
                    appearance="fill"
                    class="w-full !text-sm"
                    subscriptSizing="dynamic"
                  >
                    <mat-label class="!text-sm"
                      >Brief Description of your Hotel</mat-label
                    >
                    <textarea
                      matInput
                      formControlName="description"
                      rows="3"
                      placeholder="Enter hotel description (single language)"
                      class="!text-sm !leading-tight resize-none"
                      style="line-height: 1.3;"
                    ></textarea>
                    <mat-icon matSuffix class="!text-base"
                      >description</mat-icon
                    >
                  </mat-form-field>

                  <mat-form-field
                    appearance="fill"
                    subscriptSizing="dynamic"
                    class="w-full"
                  >
                    <mat-label>Total Rooms</mat-label>
                    <input
                      matInput
                      formControlName="totalrooms"
                      placeholder="Enter total rooms"
                      class="!text-sm !py-1"
                      style="line-height: 1.2;"
                    />
                    @if (
                      hotelForm.get('totalrooms')?.invalid &&
                      hotelForm.get('totalrooms')?.touched
                    ) {
                      <mat-error class="!text-xs"
                        >Total rooms is required</mat-error
                      >
                    }
                  </mat-form-field>
                  <mat-form-field
                    appearance="fill"
                    class="w-full !text-sm"
                    subscriptSizing="dynamic"
                  >
                    <mat-label class="!text-sm">Services Offered</mat-label>
                    <textarea
                      matInput
                      formControlName="services"
                      rows="2"
                      placeholder="List of services offered"
                      class="!text-sm !leading-tight resize-none"
                      style="line-height: 1.3;"
                    ></textarea>
                    <mat-icon matSuffix class="!text-base"
                      >room_service</mat-icon
                    >
                  </mat-form-field>

                  <mat-form-field
                    appearance="fill"
                    class="w-full !text-sm"
                    subscriptSizing="dynamic"
                  >
                    <mat-label class="!text-sm">GSTIN</mat-label>
                    <input
                      matInput
                      formControlName="gstin"
                      placeholder="GST identification number"
                      class="!text-sm !py-1"
                      style="line-height: 1.2;"
                    />
                    <mat-icon matSuffix class="!text-base">receipt</mat-icon>
                  </mat-form-field>

                  <!-- Main Billing Address Section -->
                  <div class="mt-4 p-3 bg-gray-50 rounded-lg">
                    <h3 class="text-sm font-medium text-gray-700 mb-2">
                      Main Billing Address:
                    </h3>

                    <div class="flex items-center mb-2">
                      <mat-checkbox
                        formControlName="sameashoteladdress"
                        class="!text-sm"
                      >
                        Same as Hotel Address
                      </mat-checkbox>
                    </div>

                    <div class="grid grid-cols-1 gap-2">
                      <mat-form-field
                        appearance="fill"
                        class="w-full !text-sm"
                        subscriptSizing="dynamic"
                      >
                        <mat-label class="!text-sm">Address Line 1</mat-label>
                        <input
                          matInput
                          formControlName="billingaddress1"
                          placeholder="Street address"
                          class="!text-sm !py-1"
                          style="line-height: 1.2;"
                        />
                        <mat-icon matSuffix class="!text-base">home</mat-icon>
                      </mat-form-field>

                      <mat-form-field
                        appearance="fill"
                        class="w-full !text-sm"
                        subscriptSizing="dynamic"
                      >
                        <mat-label class="!text-sm">Address Line 2</mat-label>
                        <input
                          matInput
                          formControlName="billingaddress2"
                          placeholder="Apartment, suite, etc."
                          class="!text-sm !py-1"
                          style="line-height: 1.2;"
                        />
                        <mat-icon matSuffix class="!text-base"
                          >apartment</mat-icon
                        >
                      </mat-form-field>

                      <div class="grid grid-cols-2 gap-2">
                        <mat-form-field
                          appearance="fill"
                          class="!text-sm"
                          subscriptSizing="dynamic"
                        >
                          <mat-label class="!text-sm">Country</mat-label>
                          <mat-select
                            formControlName="billingcountry"
                            class="!text-sm"
                          >
                            <mat-option value="IN" class="!text-sm"
                              >India</mat-option
                            >
                            <mat-option value="US" class="!text-sm"
                              >United States</mat-option
                            >
                            <mat-option value="UK" class="!text-sm"
                              >United Kingdom</mat-option
                            >
                          </mat-select>
                          <mat-icon matSuffix class="!text-base">flag</mat-icon>
                        </mat-form-field>

                        <mat-form-field
                          appearance="fill"
                          class="!text-sm"
                          subscriptSizing="dynamic"
                        >
                          <mat-label class="!text-sm">State</mat-label>
                          <mat-select
                            formControlName="billingstate"
                            class="!text-sm"
                          >
                            <mat-option value="DL" class="!text-sm"
                              >Delhi</mat-option
                            >
                            <mat-option value="MH" class="!text-sm"
                              >Maharashtra</mat-option
                            >
                          </mat-select>
                          <mat-icon matSuffix class="!text-base">map</mat-icon>
                        </mat-form-field>
                      </div>

                      <div class="grid grid-cols-3 gap-2">
                        <mat-form-field
                          appearance="fill"
                          class="!text-sm"
                          subscriptSizing="dynamic"
                        >
                          <mat-label class="!text-sm">City</mat-label>
                          <input
                            matInput
                            formControlName="billingcity"
                            placeholder="City"
                            class="!text-sm !py-1"
                            style="line-height: 1.2;"
                          />
                          <mat-icon matSuffix class="!text-base"
                            >location_city</mat-icon
                          >
                        </mat-form-field>

                        <mat-form-field
                          appearance="fill"
                          class="!text-sm"
                          subscriptSizing="dynamic"
                        >
                          <mat-label class="!text-sm">Zip Code</mat-label>
                          <input
                            matInput
                            formControlName="billingzipcode"
                            placeholder="Zip code"
                            class="!text-sm !py-1"
                            style="line-height: 1.2;"
                          />
                          <mat-icon matSuffix class="!text-base"
                            >markunread_mailbox</mat-icon
                          >
                        </mat-form-field>

                        <mat-form-field
                          appearance="fill"
                          class="!text-sm"
                          subscriptSizing="dynamic"
                        >
                          <mat-label class="!text-sm">Office Phone</mat-label>
                          <input
                            matInput
                            formControlName="billingphone"
                            placeholder="Phone"
                            class="!text-sm !py-1"
                            style="line-height: 1.2;"
                          />
                          <mat-icon matSuffix class="!text-base"
                            >business</mat-icon
                          >
                        </mat-form-field>
                      </div>

                      <mat-form-field
                        appearance="fill"
                        class="w-full !text-sm"
                        subscriptSizing="dynamic"
                      >
                        <mat-label class="!text-sm">Office Fax</mat-label>
                        <input
                          matInput
                          formControlName="billingfax"
                          placeholder="Fax number"
                          class="!text-sm !py-1"
                          style="line-height: 1.2;"
                        />
                        <mat-icon matSuffix class="!text-base">fax</mat-icon>
                      </mat-form-field>
                    </div>
                  </div>

                  <!-- Main Billing Contact Section -->
                  <div class="mt-4 p-3 bg-gray-50 rounded-lg">
                    <h3 class="text-sm font-medium text-gray-700 mb-2">
                      Main Billing Contact:
                    </h3>

                    <div class="grid grid-cols-2 gap-2">
                      <mat-form-field
                        appearance="fill"
                        class="!text-sm"
                        subscriptSizing="dynamic"
                      >
                        <mat-label class="!text-sm">Salutation</mat-label>
                        <mat-select
                          formControlName="salutation"
                          class="!text-sm"
                        >
                          <mat-option value="Mr" class="!text-sm"
                            >Mr.</mat-option
                          >
                          <mat-option value="Mrs" class="!text-sm"
                            >Mrs.</mat-option
                          >
                          <mat-option value="Ms" class="!text-sm"
                            >Ms.</mat-option
                          >
                          <mat-option value="Dr" class="!text-sm"
                            >Dr.</mat-option
                          >
                        </mat-select>
                        <mat-icon matSuffix class="!text-base">person</mat-icon>
                      </mat-form-field>

                      <mat-form-field
                        appearance="fill"
                        class="!text-sm"
                        subscriptSizing="dynamic"
                      >
                        <mat-label class="!text-sm">First Name</mat-label>
                        <input
                          matInput
                          formControlName="contactfirstname"
                          placeholder="First name"
                          class="!text-sm !py-1"
                          style="line-height: 1.2;"
                        />
                        <mat-icon matSuffix class="!text-base"
                          >person_outline</mat-icon
                        >
                      </mat-form-field>
                    </div>

                    <div class="grid grid-cols-2 gap-2">
                      <mat-form-field
                        appearance="fill"
                        class="!text-sm"
                        subscriptSizing="dynamic"
                      >
                        <mat-label class="!text-sm">Last Name</mat-label>
                        <input
                          matInput
                          formControlName="contactlastname"
                          placeholder="Last name"
                          class="!text-sm !py-1"
                          style="line-height: 1.2;"
                        />
                        <mat-icon matSuffix class="!text-base">person</mat-icon>
                      </mat-form-field>

                      <mat-form-field
                        appearance="fill"
                        class="!text-sm"
                        subscriptSizing="dynamic"
                      >
                        <mat-label class="!text-sm">Designation</mat-label>
                        <input
                          matInput
                          formControlName="designation"
                          placeholder="Job title"
                          class="!text-sm !py-1"
                          style="line-height: 1.2;"
                        />
                        <mat-icon matSuffix class="!text-base">work</mat-icon>
                      </mat-form-field>
                    </div>

                    <div class="grid grid-cols-3 gap-2">
                      <mat-form-field
                        appearance="fill"
                        class="!text-sm"
                        subscriptSizing="dynamic"
                      >
                        <mat-label class="!text-sm">Office Phone</mat-label>
                        <input
                          matInput
                          formControlName="contactofficephone"
                          placeholder="Office phone"
                          class="!text-sm !py-1"
                          style="line-height: 1.2;"
                        />
                        <mat-icon matSuffix class="!text-base"
                          >business</mat-icon
                        >
                      </mat-form-field>

                      <mat-form-field
                        appearance="fill"
                        class="!text-sm"
                        subscriptSizing="dynamic"
                      >
                        <mat-label class="!text-sm">Office Fax</mat-label>
                        <input
                          matInput
                          formControlName="contactfax"
                          placeholder="Office fax"
                          class="!text-sm !py-1"
                          style="line-height: 1.2;"
                        />
                        <mat-icon matSuffix class="!text-base">fax</mat-icon>
                      </mat-form-field>

                      <mat-form-field
                        appearance="fill"
                        class="!text-sm"
                        subscriptSizing="dynamic"
                      >
                        <mat-label class="!text-sm">Email Id</mat-label>
                        <input
                          matInput
                          formControlName="contactemail"
                          type="email"
                          placeholder="Email address"
                          class="!text-sm !py-1"
                          style="line-height: 1.2;"
                        />
                        <mat-icon matSuffix class="!text-base">email</mat-icon>
                      </mat-form-field>
                    </div>

                    <mat-form-field
                      appearance="fill"
                      class="w-full !text-sm"
                      subscriptSizing="dynamic"
                    >
                      <mat-label class="!text-sm">Mobile</mat-label>
                      <input
                        matInput
                        formControlName="contactmobile"
                        placeholder="Mobile number"
                        class="!text-sm !py-1"
                        style="line-height: 1.2;"
                      />
                      <mat-icon matSuffix class="!text-base"
                        >phone_android</mat-icon
                      >
                    </mat-form-field>

                    <div class="text-xs text-gray-600 mt-2">
                      Note: Both marked with an * are compulsory
                    </div>
                  </div>
                </form>
              } @else {
                <div class="flex items-center justify-center py-8">
                  <mat-icon class="animate-spin mr-2 text-blue-600"
                    >refresh</mat-icon
                  >
                  <span class="text-sm text-gray-600">Loading form...</span>
                </div>
              }
            </mat-card-content>

            <mat-card-actions class="flex-shrink-0 !px-3 !pb-3 !pt-1">
              <button
                mat-raised-button
                color="primary"
                (click)="onSubmit()"
                [disabled]="
                  !formInitialized() ||
                  !hotelForm ||
                  hotelForm.invalid ||
                  saving()
                "
                class="!text-sm !font-medium !min-h-9 !px-4"
              >
                @if (saving()) {
                  <mat-icon class="animate-spin mr-1 !text-base"
                    >refresh</mat-icon
                  >
                } @else {
                  <mat-icon class="mr-1 !text-base">save</mat-icon>
                }
                {{ hasHotel() ? 'Update Hotel' : 'Save Hotel' }}
              </button>

              @if (hasHotel()) {
                <button
                  mat-button
                  color="warn"
                  (click)="clearHotel()"
                  type="button"
                  class="!text-sm !min-h-9"
                >
                  <mat-icon class="mr-1 !text-base">delete</mat-icon>
                  Clear Hotel
                </button>
              }

              <button
                mat-button
                (click)="resetForm()"
                type="button"
                class="!text-sm !min-h-9"
              >
                Reset
              </button>
            </mat-card-actions>
          </mat-card>
        </div>

        <!-- Information Card -->
        <div>
          @if (hasHotel()) {
            <mat-card class="flex flex-col">
              <mat-card-header class="flex-shrink-0 !pb-2">
                <mat-card-title class="flex items-center text-sm font-medium">
                  <mat-icon class="mr-2 text-green-600 !text-lg">info</mat-icon>
                  Current Hotel Information
                </mat-card-title>
              </mat-card-header>

              <mat-card-content
                class="flex-1 !pt-0 !pb-2 overflow-y-auto min-h-64"
              >
                <div class="space-y-2 text-sm">
                  <div class="flex justify-between">
                    <span class="font-medium text-gray-600">Hotel Name:</span>
                    <span class="font-medium">{{ store.hotel().name }}</span>
                  </div>

                  <div class="flex justify-between">
                    <span class="font-medium text-gray-600">Company ID:</span>
                    <span>{{ store.hotel().companyId || 'N/A' }}</span>
                  </div>

                  <div class="flex justify-between">
                    <span class="font-medium text-gray-600">Total Rooms:</span>
                    <span>{{ store.hotel().totalRooms || 'N/A' }}</span>
                  </div>

                  <div class="flex justify-between">
                    <span class="font-medium text-gray-600">Status:</span>
                    <span [class]="getStatusClass(store.hotel().status)">
                      {{ getStatusText(store.hotel().status) }}
                    </span>
                  </div>

                  @if (store.hotel().website) {
                    <div class="flex justify-between">
                      <span class="font-medium text-gray-600">Website:</span>
                      <a
                        [href]="store.hotel().website"
                        target="_blank"
                        class="text-blue-600 hover:underline"
                      >
                        <mat-icon class="text-xs">launch</mat-icon>
                      </a>
                    </div>
                  }
                </div>

                @if (store.hotel().description) {
                  <div class="mt-4 pt-4 border-t border-gray-200">
                    <span class="font-medium text-gray-600 block mb-2"
                      >Description:</span
                    >
                    <p class="text-gray-700 text-sm leading-relaxed">
                      {{ store.hotel().description }}
                    </p>
                  </div>
                }
              </mat-card-content>
            </mat-card>
          } @else {
            <mat-card>
              <mat-card-content>
                <div class="text-center py-8 text-gray-500">
                  <mat-icon class="text-4xl mb-2 opacity-50">hotel</mat-icon>
                  <p>No hotel configured yet</p>
                  <p class="text-sm">Fill in the form to set up your hotel</p>
                </div>
              </mat-card-content>
            </mat-card>
          }
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      /* Compact Material 3 Form Styling */
      .compact-card {
        ::ng-deep .mat-mdc-card-header {
          padding: 12px 16px 8px 16px;
        }

        ::ng-deep .mat-mdc-card-content {
          padding: 0 16px 8px 16px;
        }

        ::ng-deep .mat-mdc-card-actions {
          padding: 8px 16px 12px 16px;
        }
      }

      ::ng-deep .mat-mdc-form-field {
        font-size: 12px;
      }

      ::ng-deep .mat-mdc-form-field .mat-mdc-floating-label {
        font-size: 12px;
      }

      ::ng-deep .mat-mdc-form-field .mat-mdc-input-element {
        font-size: 12px;
        padding: 8px 12px;
        min-height: 24px;
      }

      ::ng-deep .mat-mdc-form-field-infix {
        min-height: 40px;
        padding: 6px 0;
      }

      ::ng-deep .mat-mdc-text-field-wrapper {
        height: 40px;
      }

      ::ng-deep .mat-mdc-button {
        height: 28px;
        font-size: 12px;
        padding: 0 12px;
        min-width: 64px;
      }

      ::ng-deep .mat-mdc-button-base {
        height: 28px;
      }
    `,
  ],
})
export class HotelComponent {
  private fb = inject(FormBuilder);
  public store = inject(HotelStore);
  private snackBar = inject(MatSnackBar);

  saving = signal(false);
  formInitialized = signal(false);

  hotelForm!: FormGroup;

  constructor() {
    // Defer heavy form initialization
    setTimeout(() => {
      this.initializeForm();
    }, 0);
  }

  private initializeForm() {
    this.hotelForm = this.fb.group({
      // Basic Information
      hotelname: ['', Validators.required],
      hotelcode: [''],
      address: [''],
      country: [''],
      state: [''],
      city: [''],
      zipcode: [''],
      phone: [''],
      category: [''],
      fax: [''],
      website: [''],
      email: ['', [Validators.email]],
      description: [''],
      totalrooms: [null, [Validators.min(1)]],
      services: [''],
      gstin: [''],

      // Billing Address
      sameashoteladdress: [false],
      billingaddress1: [''],
      billingaddress2: [''],
      billingcountry: [''],
      billingstate: [''],
      billingcity: [''],
      billingzipcode: [''],
      billingphone: [''],
      billingfax: [''],

      // Main Billing Contact
      salutation: [''],
      contactfirstname: [''],
      contactlastname: [''],
      designation: [''],
      contactofficephone: [''],
      contactfax: [''],
      contactemail: ['', [Validators.email]],
      contactmobile: [''],

      // System fields
      compid: [null],
      status: ['A', Validators.required],
    });

    this.patchFromStore();
    this.formInitialized.set(true);
  }

  hasHotel() {
    const h = this.store.hotel();
    // Consider hotel present if it has a name or any non-empty values
    return !!h?.name;
  }

  private patchFromStore(): void {
    const h = this.store.hotel();
    if (!h) return;

    this.hotelForm.patchValue({
      hotelname: h.name || '',
      hotelcode: '',
      address: '',
      country: '',
      state: '',
      city: '',
      zipcode: '',
      phone: '',
      category: '',
      fax: '',
      website: h.website || '',
      email: '',
      description: h.description || '',
      totalrooms: h.totalRooms ?? null,
      services: '',
      gstin: '',

      // Billing Address
      sameashoteladdress: false,
      billingaddress1: '',
      billingaddress2: '',
      billingcountry: '',
      billingstate: '',
      billingcity: '',
      billingzipcode: '',
      billingphone: '',
      billingfax: '',

      // Main Billing Contact
      salutation: '',
      contactfirstname: '',
      contactlastname: '',
      designation: '',
      contactofficephone: '',
      contactfax: '',
      contactemail: '',
      contactmobile: '',

      // System fields
      compid: (h.companyId as unknown as number) ?? null,
      status: h.status === 'active' ? 'A' : 'I',
    });
  }

  onSubmit(): void {
    if (!this.formInitialized() || !this.hotelForm || this.hotelForm.invalid) {
      if (this.hotelForm) {
        this.markFormGroupTouched();
      }
      return;
    }

    this.saving.set(true);
    const v = this.hotelForm.value as HotelFormValue;

    setTimeout(() => {
      const now = new Date();
      const patch: Partial<Hotel> = {
        updatedAt: now,
        name: v.hotelname,
        description: v.description || '',
        status: v.status === 'A' ? 'active' : 'inactive',
        companyId:
          ((v.compid as unknown as EntityId) ?? this.store.hotel().companyId)?.toString(),
        website: v.website || this.store.hotel().website,
        totalRooms: v.totalrooms ?? this.store.hotel().totalRooms,
      };

      const merged: Hotel = { ...this.store.hotel(), ...patch } as Hotel;
      const res = this.store.setHotel(merged);
      if (res.ok) {
        this.snackBar.open('Hotel saved successfully!', 'Close', {
          duration: 3000,
        });
      } else {
        this.snackBar.open(res.errors?.[0] ?? 'Failed to save hotel', 'Close', {
          duration: 4000,
        });
      }
      this.saving.set(false);
    }, 300);
  }

  resetForm(): void {
    if (this.formInitialized() && this.hotelForm) {
      this.patchFromStore();
    }
  }

  clearHotel(): void {
    if (confirm('Are you sure you want to clear the hotel configuration?')) {
      this.store.resetAll();
      if (this.formInitialized() && this.hotelForm) {
        this.hotelForm.reset({ status: 'A' });
      }
      this.snackBar.open('Hotel configuration cleared!', 'Close', {
        duration: 3000,
      });
    }
  }

  getStatusText(
    status: 'active' | 'inactive' | 'deleted' | 'A' | 'I' | 'P',
  ): string {
    switch (status) {
      case 'A':
      case 'active':
        return 'Active';
      case 'I':
      case 'inactive':
        return 'Inactive';
      case 'deleted':
        return 'Deleted';
      case 'P':
        return 'Pending';
      default:
        return 'Unknown';
    }
  }

  getStatusClass(
    status: 'active' | 'inactive' | 'deleted' | 'A' | 'I' | 'P',
  ): string {
    switch (status) {
      case 'A':
      case 'active':
        return 'text-green-600 bg-green-100 px-2 py-1 rounded';
      case 'I':
      case 'inactive':
        return 'text-red-600 bg-red-100 px-2 py-1 rounded';
      case 'deleted':
        return 'text-gray-600 bg-gray-100 px-2 py-1 rounded';
      case 'P':
        return 'text-yellow-600 bg-yellow-100 px-2 py-1 rounded';
      default:
        return 'text-gray-600';
    }
  }

  private markFormGroupTouched(): void {
    if (!this.hotelForm) return;

    Object.keys(this.hotelForm.controls).forEach((key) => {
      this.hotelForm.get(key)?.markAsTouched();
    });
  }
}
