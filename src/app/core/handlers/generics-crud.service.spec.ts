import { TestBed } from '@angular/core/testing';

import { GenericsCRUDService } from './generics-crud.service';

describe('GenericsCRUDService', () => {
  let service: GenericsCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericsCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
