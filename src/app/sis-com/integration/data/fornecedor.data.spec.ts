import { TestBed } from '@angular/core/testing';

import { FornecedorData } from './fornecedor.data';

describe('FornecedorData', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FornecedorData = TestBed.get(FornecedorData);
    expect(service).toBeTruthy();
  });
});
