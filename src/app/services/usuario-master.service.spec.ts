import { TestBed } from '@angular/core/testing';

import { UsuarioMasterService } from './usuario-master.service';

describe('UsuarioMasterService', () => {
  let service: UsuarioMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
