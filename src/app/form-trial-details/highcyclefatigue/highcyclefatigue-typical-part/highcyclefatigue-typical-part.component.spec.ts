import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighcyclefatigueTypicalPartComponent } from './highcyclefatigue-typical-part.component';

describe('HighcyclefatigueTypicalPartComponent', () => {
  let component: HighcyclefatigueTypicalPartComponent;
  let fixture: ComponentFixture<HighcyclefatigueTypicalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighcyclefatigueTypicalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighcyclefatigueTypicalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
