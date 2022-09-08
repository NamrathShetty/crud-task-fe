import { TestBed } from '@angular/core/testing';

import { ApiConfService } from './api-conf.service';

describe('ApiConfService', () => {
  let service: ApiConfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiConfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
