import { TestBed } from '@angular/core/testing';

import { AttendaceStatusService } from './attendace-status.service';

describe('AttendaceStatusService', () => {
  let service: AttendaceStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendaceStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
