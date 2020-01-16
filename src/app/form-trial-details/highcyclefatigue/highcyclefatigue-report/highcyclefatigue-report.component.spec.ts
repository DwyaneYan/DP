import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighcyclefatigueReportComponent } from './highcyclefatigue-report.component';

describe('HighcyclefatigueReportComponent', () => {
  let component: HighcyclefatigueReportComponent;
  let fixture: ComponentFixture<HighcyclefatigueReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighcyclefatigueReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighcyclefatigueReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
