import { TestBed } from '@angular/core/testing';

import { MaterialsContrastService } from './materials-contrast.service';

describe('MaterialsContrastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaterialsContrastService = TestBed.get(MaterialsContrastService);
    expect(service).toBeTruthy();
  });
});
