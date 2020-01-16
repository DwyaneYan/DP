import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeldingReportComponent } from './welding-report.component';

describe('WeldingReportComponent', () => {
  let component: WeldingReportComponent;
  let fixture: ComponentFixture<WeldingReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeldingReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeldingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
