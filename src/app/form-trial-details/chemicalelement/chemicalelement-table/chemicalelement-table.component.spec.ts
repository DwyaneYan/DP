import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalelementTableComponent } from './chemicalelement-table.component';

describe('ChemicalelementTableComponent', () => {
  let component: ChemicalelementTableComponent;
  let fixture: ComponentFixture<ChemicalelementTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemicalelementTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemicalelementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
