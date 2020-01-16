import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CementingReportComponent } from './cementing-report.component';

describe('CementingReportComponent', () => {
  let component: CementingReportComponent;
  let fixture: ComponentFixture<CementingReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CementingReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CementingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
