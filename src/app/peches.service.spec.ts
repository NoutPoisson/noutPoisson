import { TestBed, inject } from '@angular/core/testing';

import { PechesService } from './peches.service';

describe('PechesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PechesService]
    });
  });

  it('should be created', inject([PechesService], (service: PechesService) => {
    expect(service).toBeTruthy();
  }));
});
