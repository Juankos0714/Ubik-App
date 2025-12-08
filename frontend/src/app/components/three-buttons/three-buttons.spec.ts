import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeButtons } from './three-buttons';

describe('ThreeButtons', () => {
  let component: ThreeButtons;
  let fixture: ComponentFixture<ThreeButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeButtons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeButtons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
