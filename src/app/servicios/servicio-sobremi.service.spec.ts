import { TestBed } from '@angular/core/testing';

import { ServicioSobremiService } from './servicio-sobremi.service';

describe('ServicioSobremiService', () => {
  let service: ServicioSobremiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioSobremiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
