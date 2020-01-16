import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalelementReportComponent } from './chemicalelement-report.component';

describe('ChemicalelementReportComponent', () => {
  let component: ChemicalelementReportComponent;
  let fixture: ComponentFixture<ChemicalelementReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemicalelementReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemicalelementReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
