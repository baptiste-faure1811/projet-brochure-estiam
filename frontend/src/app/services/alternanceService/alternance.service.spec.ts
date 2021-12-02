import { TestBed } from '@angular/core/testing';

import { AlternanceService } from './alternance.service';

describe('AlternanceService', () => {
  let service: AlternanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlternanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
