import { TestBed } from '@angular/core/testing';

import { CommercialBoService } from './commercial-bo.service';

describe('CommercialBoService', () => {
  let service: CommercialBoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommercialBoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
