import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HydrogenInducedDelayedFractureNavigateComponent } from './hydrogen-induced-delayed-fracture-navigate.component';

describe('HydrogenInducedDelayedFractureNavigateComponent', () => {
  let component: HydrogenInducedDelayedFractureNavigateComponent;
  let fixture: ComponentFixture<HydrogenInducedDelayedFractureNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HydrogenInducedDelayedFractureNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HydrogenInducedDelayedFractureNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
