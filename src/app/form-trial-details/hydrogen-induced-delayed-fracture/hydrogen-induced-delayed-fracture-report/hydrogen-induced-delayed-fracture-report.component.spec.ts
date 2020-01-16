import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HydrogenInducedDelayedFractureReportComponent } from './hydrogen-induced-delayed-fracture-report.component';

describe('HydrogenInducedDelayedFractureReportComponent', () => {
  let component: HydrogenInducedDelayedFractureReportComponent;
  let fixture: ComponentFixture<HydrogenInducedDelayedFractureReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HydrogenInducedDelayedFractureReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HydrogenInducedDelayedFractureReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
