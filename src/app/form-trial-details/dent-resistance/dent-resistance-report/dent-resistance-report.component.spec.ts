import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentResistanceReportComponent } from './dent-resistance-report.component';

describe('DentResistanceReportComponent', () => {
  let component: DentResistanceReportComponent;
  let fixture: ComponentFixture<DentResistanceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentResistanceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentResistanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
