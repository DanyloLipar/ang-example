import { TestBed } from '@angular/core/testing';

import { AutoFiltersService } from './auto-filters.service';

describe('AutoFiltersService', () => {
  let service: AutoFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
