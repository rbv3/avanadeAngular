import { TestBed } from '@angular/core/testing';

import { CatService } from './cat.service';

describe('ShibeService', () => {
  let service: CatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
