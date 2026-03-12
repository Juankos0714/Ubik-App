import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { of } from 'rxjs';
import * as StripeJs from '@stripe/stripe-js';

import { PaymentModal } from './payment-modal';
import { RoomService } from '../../core/services/room.service';
import { PaymentService } from '../../core/services/payment.service';

describe('PaymentModal', () => {
  let component: PaymentModal;
  let fixture: ComponentFixture<PaymentModal>;

  beforeEach(async () => {
    spyOn(StripeJs, 'loadStripe').and.resolveTo(null as any);

    const roomServiceMock: Pick<RoomService, 'getRoomById' | 'getReservationsForDate' | 'checkAvailability'> = {
      getRoomById: () =>
        of({
          id: 1,
          motelId: 1,
          motelName: 'Test Motel',
          motelCity: 'Test City',
          motelAddress: 'Test Address',
          motelPhoneNumber: '000',
          number: '101',
          roomType: 'Suite',
          price: 10000,
          description: 'Test',
          imageUrls: [],
          serviceIds: [],
          latitude: 0,
          longitude: 0,
          isAvailable: true,
        }),
      getReservationsForDate: () => of([]),
      checkAvailability: () => of({ available: true }),
    };

    const paymentServiceMock: Pick<PaymentService, 'getStripeConfig' | 'createReservation' | 'createPaymentIntent'> = {
      getStripeConfig: () => of({ publishableKey: 'pk_test_mock' }),
      createReservation: () => of({ id: 1, confirmationCode: 'TEST' }),
      createPaymentIntent: () => of({ paymentId: 1, clientSecret: 'cs_test_mock' }),
    };

    await TestBed.configureTestingModule({
      imports: [PaymentModal],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: DialogRef, useValue: { close: () => { } } },
        { provide: DIALOG_DATA, useValue: { id: 1 } },
        { provide: RoomService, useValue: roomServiceMock },
        { provide: PaymentService, useValue: paymentServiceMock },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
