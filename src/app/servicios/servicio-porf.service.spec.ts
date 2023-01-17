import { TestBed } from '@angular/core/testing';

import { ServicioPorfService } from './servicio-porf.service';

describe('ServicioPorfService', () => {
  let service: ServicioPorfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPorfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
