import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HydrogenInducedDelayedFractureTableComponent } from './hydrogen-induced-delayed-fracture-table.component';

describe('HydrogenInducedDelayedFractureTableComponent', () => {
  let component: HydrogenInducedDelayedFractureTableComponent;
  let fixture: ComponentFixture<HydrogenInducedDelayedFractureTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HydrogenInducedDelayedFractureTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HydrogenInducedDelayedFractureTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
