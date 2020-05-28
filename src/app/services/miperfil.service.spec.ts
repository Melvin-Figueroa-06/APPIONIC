import { TestBed } from '@angular/core/testing';

import { MiperfilService } from './miperfil.service';

describe('MiperfilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiperfilService = TestBed.get(MiperfilService);
    expect(service).toBeTruthy();
  });
});
