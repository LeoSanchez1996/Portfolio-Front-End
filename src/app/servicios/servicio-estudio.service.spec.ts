import { TestBed } from '@angular/core/testing';

import { ServicioEstudioService } from './servicio-estudio.service';

describe('ServicioEstudioService', () => {
  let service: ServicioEstudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioEstudioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
