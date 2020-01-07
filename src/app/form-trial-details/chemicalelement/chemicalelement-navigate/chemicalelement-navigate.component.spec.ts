import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalelementNavigateComponent } from './chemicalelement-navigate.component';

describe('ChemicalelementNavigateComponent', () => {
  let component: ChemicalelementNavigateComponent;
  let fixture: ComponentFixture<ChemicalelementNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemicalelementNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemicalelementNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
