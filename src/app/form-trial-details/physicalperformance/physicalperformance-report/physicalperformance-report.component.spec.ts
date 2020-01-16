import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalperformanceReportComponent } from './physicalperformance-report.component';

describe('PhysicalperformanceReportComponent', () => {
  let component: PhysicalperformanceReportComponent;
  let fixture: ComponentFixture<PhysicalperformanceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalperformanceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalperformanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
