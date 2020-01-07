import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowcyclefatigueTableComponent } from './lowcyclefatigue-table.component';

describe('LowcyclefatigueTableComponent', () => {
  let component: LowcyclefatigueTableComponent;
  let fixture: ComponentFixture<LowcyclefatigueTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowcyclefatigueTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowcyclefatigueTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
