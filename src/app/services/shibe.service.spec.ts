import { TestBed } from '@angular/core/testing';

import { ShibeService } from './shibe.service';

describe('ShibeService', () => {
  let service: ShibeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShibeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
