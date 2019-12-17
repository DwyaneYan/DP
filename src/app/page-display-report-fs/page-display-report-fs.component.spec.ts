import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDisplayReportFsComponent } from './page-display-report-fs.component';

describe('PageDisplayReportFsComponent', () => {
  let component: PageDisplayReportFsComponent;
  let fixture: ComponentFixture<PageDisplayReportFsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDisplayReportFsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDisplayReportFsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
