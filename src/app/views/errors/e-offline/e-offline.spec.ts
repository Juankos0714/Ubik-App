import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EOffline } from './e-offline';

describe('EOffline', () => {
  let component: EOffline;
  let fixture: ComponentFixture<EOffline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EOffline]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EOffline);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
