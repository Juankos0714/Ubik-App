import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E401 } from './e401';

describe('E401', () => {
  let component: E401;
  let fixture: ComponentFixture<E401>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [E401]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E401);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
