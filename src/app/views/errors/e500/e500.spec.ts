import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E500 } from './e500';

describe('E500', () => {
  let component: E500;
  let fixture: ComponentFixture<E500>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [E500]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E500);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
