import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRegister } from './select-register';

describe('SelectRegister', () => {
  let component: SelectRegister;
  let fixture: ComponentFixture<SelectRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectRegister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectRegister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
