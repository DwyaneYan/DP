import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompressionReportComponent } from './compression-report.component';

describe('CompressionReportComponent', () => {
  let component: CompressionReportComponent;
  let fixture: ComponentFixture<CompressionReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompressionReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompressionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
