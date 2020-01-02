import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighcyclefatigueComponent } from './highcyclefatigue.component';

describe('HighcyclefatigueComponent', () => {
  let component: HighcyclefatigueComponent;
  let fixture: ComponentFixture<HighcyclefatigueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighcyclefatigueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighcyclefatigueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
