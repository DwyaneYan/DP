import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticTensionReportComponent } from './static-tension-report.component';

describe('StaticTensionReportComponent', () => {
  let component: StaticTensionReportComponent;
  let fixture: ComponentFixture<StaticTensionReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticTensionReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticTensionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
