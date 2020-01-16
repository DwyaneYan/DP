import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeHardeningReportComponent } from './bake-hardening-report.component';

describe('BakeHardeningReportComponent', () => {
  let component: BakeHardeningReportComponent;
  let fixture: ComponentFixture<BakeHardeningReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakeHardeningReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakeHardeningReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
