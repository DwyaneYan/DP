import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowcyclefatigueReportComponent } from './lowcyclefatigue-report.component';

describe('LowcyclefatigueReportComponent', () => {
  let component: LowcyclefatigueReportComponent;
  let fixture: ComponentFixture<LowcyclefatigueReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowcyclefatigueReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowcyclefatigueReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
