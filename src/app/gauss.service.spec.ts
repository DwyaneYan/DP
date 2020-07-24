import { TestBed } from '@angular/core/testing';

import { GaussService } from './gauss.service';

describe('GaussService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GaussService = TestBed.get(GaussService);
    expect(service).toBeTruthy();
  });
});
