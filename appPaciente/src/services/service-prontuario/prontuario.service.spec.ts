import { TestBed } from '@angular/core/testing';

import { ProntuarioService } from './prontuario.service';

describe('ProntuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProntuarioService = TestBed.get(ProntuarioService);
    expect(service).toBeTruthy();
  });
});
