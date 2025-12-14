import { TestBed } from '@angular/core/testing';

import { UserMock } from './user-mock';

describe('UserMock', () => {
  let service: UserMock;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
