import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalelementTypicalPartComponent } from './chemicalelement-typical-part.component';

describe('ChemicalelementTypicalPartComponent', () => {
  let component: ChemicalelementTypicalPartComponent;
  let fixture: ComponentFixture<ChemicalelementTypicalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemicalelementTypicalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemicalelementTypicalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
