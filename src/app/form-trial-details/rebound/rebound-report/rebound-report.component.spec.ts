import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReboundReportComponent } from './rebound-report.component';

describe('ReboundReportComponent', () => {
  let component: ReboundReportComponent;
  let fixture: ComponentFixture<ReboundReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReboundReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReboundReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
