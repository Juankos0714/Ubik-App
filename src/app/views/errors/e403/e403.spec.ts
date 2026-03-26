import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E403 } from './e403';

describe('E403', () => {
  let component: E403;
  let fixture: ComponentFixture<E403>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [E403]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E403);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
