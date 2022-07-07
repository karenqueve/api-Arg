import { TestBed } from '@angular/core/testing';

import { ArgService } from './arg.service';

describe('ArgService', () => {
  let service: ArgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
