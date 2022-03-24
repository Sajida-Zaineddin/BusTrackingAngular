import { TestBed } from '@angular/core/testing';

import { RoundStatusService } from './round-status.service';

describe('RoundStatusService', () => {
  let service: RoundStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoundStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
