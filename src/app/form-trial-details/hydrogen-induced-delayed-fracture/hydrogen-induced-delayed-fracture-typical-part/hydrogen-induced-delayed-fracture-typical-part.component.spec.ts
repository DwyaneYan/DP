import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HydrogenInducedDelayedFractureTypicalPartComponent } from './hydrogen-induced-delayed-fracture-typical-part.component';

describe('HydrogenInducedDelayedFractureTypicalPartComponent', () => {
  let component: HydrogenInducedDelayedFractureTypicalPartComponent;
  let fixture: ComponentFixture<HydrogenInducedDelayedFractureTypicalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HydrogenInducedDelayedFractureTypicalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HydrogenInducedDelayedFractureTypicalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
