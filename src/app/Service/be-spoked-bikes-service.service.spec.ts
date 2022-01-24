import { TestBed } from '@angular/core/testing';

import { BeSpokedBikesServiceService } from './be-spoked-bikes-service.service';

describe('BeSpokedBikesServiceService', () => {
  let service: BeSpokedBikesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeSpokedBikesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
