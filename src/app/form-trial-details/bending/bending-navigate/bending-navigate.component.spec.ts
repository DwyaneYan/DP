import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BendingNavigateComponent } from './bending-navigate.component';

describe('BendingNavigateComponent', () => {
  let component: BendingNavigateComponent;
  let fixture: ComponentFixture<BendingNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BendingNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BendingNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
