import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighspeedstrechReportComponent } from './highspeedstrech-report.component';

describe('HighspeedstrechReportComponent', () => {
  let component: HighspeedstrechReportComponent;
  let fixture: ComponentFixture<HighspeedstrechReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighspeedstrechReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighspeedstrechReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
