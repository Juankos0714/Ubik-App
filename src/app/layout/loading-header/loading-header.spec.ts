import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingHeader } from './loading-header';

describe('LoadingHeader', () => {
  let component: LoadingHeader;
  let fixture: ComponentFixture<LoadingHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
