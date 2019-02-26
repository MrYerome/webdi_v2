import { TestBed } from '@angular/core/testing';

import { DinerServiceService } from './diner-service.service';

describe('DinerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DinerServiceService = TestBed.get(DinerServiceService);
    expect(service).toBeTruthy();
  });
});
