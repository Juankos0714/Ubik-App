import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselArrowLeft } from './carousel-arrow-left';

describe('CarouselArrowLeft', () => {
  let component: CarouselArrowLeft;
  let fixture: ComponentFixture<CarouselArrowLeft>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselArrowLeft]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselArrowLeft);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
