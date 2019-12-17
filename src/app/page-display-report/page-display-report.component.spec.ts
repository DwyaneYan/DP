import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDisplayReportComponent } from './page-display-report.component';

describe('PageDisplayReportComponent', () => {
  let component: PageDisplayReportComponent;
  let fixture: ComponentFixture<PageDisplayReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDisplayReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDisplayReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
