import { TestBed } from '@angular/core/testing';

import { MaterialServiceService } from './material-service.service';

describe('MaterialServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaterialServiceService = TestBed.get(MaterialServiceService);
    expect(service).toBeTruthy();
  });
});
