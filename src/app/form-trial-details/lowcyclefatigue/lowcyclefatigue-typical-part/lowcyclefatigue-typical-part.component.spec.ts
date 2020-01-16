import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowcyclefatigueTypicalPartComponent } from './lowcyclefatigue-typical-part.component';

describe('LowcyclefatigueTypicalPartComponent', () => {
  let component: LowcyclefatigueTypicalPartComponent;
  let fixture: ComponentFixture<LowcyclefatigueTypicalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowcyclefatigueTypicalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowcyclefatigueTypicalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
