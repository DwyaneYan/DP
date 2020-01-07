import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentResistanceNavigateComponent } from './dent-resistance-navigate.component';

describe('DentResistanceNavigateComponent', () => {
  let component: DentResistanceNavigateComponent;
  let fixture: ComponentFixture<DentResistanceNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentResistanceNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentResistanceNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
