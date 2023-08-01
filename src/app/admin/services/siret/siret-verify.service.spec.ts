import { TestBed } from '@angular/core/testing';

import { SiretVerifyService } from './siret-verify.service';

describe('SiretVerifyService', () => {
  let service: SiretVerifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiretVerifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
