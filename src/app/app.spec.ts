import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app';
import { SwUpdate } from '@angular/service-worker';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        {
          provide: SwUpdate,
          useValue: {
            isEnabled: false,
            checkForUpdate: () => Promise.resolve(false),
            activateUpdate: () => Promise.resolve(true),
            unrecoverable: { subscribe: jasmine.createSpy('subscribe') },
            versionUpdates: { subscribe: jasmine.createSpy('subscribe') }
          }
        }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
