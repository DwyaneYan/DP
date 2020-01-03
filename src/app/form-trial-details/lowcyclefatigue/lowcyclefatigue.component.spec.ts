import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowcyclefatigueComponent } from './lowcyclefatigue.component';

describe('LowcyclefatigueComponent', () => {
  let component: LowcyclefatigueComponent;
  let fixture: ComponentFixture<LowcyclefatigueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowcyclefatigueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowcyclefatigueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
