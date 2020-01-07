import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighcyclefatigueTableComponent } from './highcyclefatigue-table.component';

describe('HighcyclefatigueTableComponent', () => {
  let component: HighcyclefatigueTableComponent;
  let fixture: ComponentFixture<HighcyclefatigueTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighcyclefatigueTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighcyclefatigueTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
