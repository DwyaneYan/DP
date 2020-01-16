import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FldReportComponent } from './fld-report.component';

describe('FldReportComponent', () => {
  let component: FldReportComponent;
  let fixture: ComponentFixture<FldReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FldReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FldReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
