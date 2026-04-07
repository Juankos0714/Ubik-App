import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselArrowRight } from './carousel-arrow-right';

describe('CarouselArrowRight', () => {
  let component: CarouselArrowRight;
  let fixture: ComponentFixture<CarouselArrowRight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselArrowRight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselArrowRight);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
