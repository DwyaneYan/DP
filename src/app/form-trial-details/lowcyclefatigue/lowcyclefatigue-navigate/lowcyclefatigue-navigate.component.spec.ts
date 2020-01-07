import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowcyclefatigueNavigateComponent } from './lowcyclefatigue-navigate.component';

describe('LowcyclefatigueNavigateComponent', () => {
  let component: LowcyclefatigueNavigateComponent;
  let fixture: ComponentFixture<LowcyclefatigueNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowcyclefatigueNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowcyclefatigueNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
