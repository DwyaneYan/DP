import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BendingReportComponent } from './bending-report.component';

describe('BendingReportComponent', () => {
  let component: BendingReportComponent;
  let fixture: ComponentFixture<BendingReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BendingReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BendingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
