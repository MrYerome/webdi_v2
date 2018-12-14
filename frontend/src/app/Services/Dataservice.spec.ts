import { TestBed, inject } from '@angular/core/testing';

import { JarwisService } from './Dataservice';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JarwisService]
    });
  });

  it('should be created', inject([JarwisService], (service: JarwisService) => {
    expect(service).toBeTruthy();
  }));
});
