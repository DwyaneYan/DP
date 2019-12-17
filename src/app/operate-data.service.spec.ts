import { TestBed } from '@angular/core/testing';

import { OperateDataService } from './operate-data.service';

describe('OperateDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OperateDataService = TestBed.get(OperateDataService);
    expect(service).toBeTruthy();
  });
});
