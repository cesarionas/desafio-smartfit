

import { TestBed } from '@angular/core/testing';
import { FilterUnitsService } from './filtered-results.service';


describe('FilteredResultsService', () => {
  let service: FilterUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterUnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
