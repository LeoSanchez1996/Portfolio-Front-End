import { TestBed } from '@angular/core/testing';

import { ServicioSkillService } from './servicio-skill.service';

describe('ServicioSkillService', () => {
  let service: ServicioSkillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioSkillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
