import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlangingClaspReportComponent } from './flanging-clasp-report.component';

describe('FlangingClaspReportComponent', () => {
  let component: FlangingClaspReportComponent;
  let fixture: ComponentFixture<FlangingClaspReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlangingClaspReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlangingClaspReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
