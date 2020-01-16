import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryWorkingEmbrittlementReportComponent } from './secondary-working-embrittlement-report.component';

describe('SecondaryWorkingEmbrittlementReportComponent', () => {
  let component: SecondaryWorkingEmbrittlementReportComponent;
  let fixture: ComponentFixture<SecondaryWorkingEmbrittlementReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryWorkingEmbrittlementReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryWorkingEmbrittlementReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
