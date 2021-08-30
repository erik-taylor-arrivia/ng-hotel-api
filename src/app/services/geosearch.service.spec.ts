import { TestBed } from '@angular/core/testing';

import { GeoSearchService } from './geosearch.service';

describe('SearchListService', () => {
  let service: GeoSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
