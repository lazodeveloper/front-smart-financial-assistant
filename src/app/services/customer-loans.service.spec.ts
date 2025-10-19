import { TestBed } from '@angular/core/testing';

import { CustomerLoansService } from './customer-loans.service';

describe('CustomerLoansService', () => {
  let service: CustomerLoansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerLoansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
