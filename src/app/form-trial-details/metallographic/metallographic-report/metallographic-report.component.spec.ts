import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetallographicReportComponent } from './metallographic-report.component';

describe('MetallographicReportComponent', () => {
  let component: MetallographicReportComponent;
  let fixture: ComponentFixture<MetallographicReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetallographicReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetallographicReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
