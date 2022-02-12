import { TestBed } from '@angular/core/testing';

import { ErrorhttpService } from './errorhttp.service';

describe('ErrorhttpService', () => {
  let service: ErrorhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
