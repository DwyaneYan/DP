import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfacePropertyReportComponent } from './surface-property-report.component';

describe('SurfacePropertyReportComponent', () => {
  let component: SurfacePropertyReportComponent;
  let fixture: ComponentFixture<SurfacePropertyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfacePropertyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfacePropertyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
