import { TestBed } from '@angular/core/testing';

import { TrialNameService } from './trial-name.service';

describe('TrialNameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrialNameService = TestBed.get(TrialNameService);
    expect(service).toBeTruthy();
  });
});
