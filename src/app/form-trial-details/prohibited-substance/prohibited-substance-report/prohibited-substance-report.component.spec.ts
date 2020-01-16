import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProhibitedSubstanceReportComponent } from './prohibited-substance-report.component';

describe('ProhibitedSubstanceReportComponent', () => {
  let component: ProhibitedSubstanceReportComponent;
  let fixture: ComponentFixture<ProhibitedSubstanceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProhibitedSubstanceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProhibitedSubstanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
