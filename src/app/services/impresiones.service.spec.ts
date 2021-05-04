import { TestBed } from '@angular/core/testing';

import { ImpresionesService } from './impresiones.service';

describe('ImpresionesService', () => {
  let service: ImpresionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpresionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
