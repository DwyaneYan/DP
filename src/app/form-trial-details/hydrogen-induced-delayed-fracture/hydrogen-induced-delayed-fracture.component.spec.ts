import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HydrogenInducedDelayedFractureComponent } from './hydrogen-induced-delayed-fracture.component';

describe('HydrogenInducedDelayedFractureComponent', () => {
  let component: HydrogenInducedDelayedFractureComponent;
  let fixture: ComponentFixture<HydrogenInducedDelayedFractureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HydrogenInducedDelayedFractureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HydrogenInducedDelayedFractureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
