import { TestBed } from '@angular/core/testing';

import { ImpastiService } from './impasti.service';

describe('ImpastiService', () => {
  let service: ImpastiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpastiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
