import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighcyclefatigueNavigateComponent } from './highcyclefatigue-navigate.component';

describe('HighcyclefatigueNavigateComponent', () => {
  let component: HighcyclefatigueNavigateComponent;
  let fixture: ComponentFixture<HighcyclefatigueNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighcyclefatigueNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighcyclefatigueNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
