import { TestBed } from '@angular/core/testing';

import { CarteiraService } from './carteira.service';

describe('CarteiraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarteiraService = TestBed.get(CarteiraService);
    expect(service).toBeTruthy();
  });
});
