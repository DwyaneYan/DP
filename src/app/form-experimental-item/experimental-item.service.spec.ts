import { TestBed } from '@angular/core/testing';

import { ExperimentalItemService } from './experimental-item.service';

describe('ExperimentalItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExperimentalItemService = TestBed.get(ExperimentalItemService);
    expect(service).toBeTruthy();
  });
});
