import { TestBed } from '@angular/core/testing';

import { InsalatoneService } from './insalatone.service';

describe('InsalatoneService', () => {
  let service: InsalatoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsalatoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
