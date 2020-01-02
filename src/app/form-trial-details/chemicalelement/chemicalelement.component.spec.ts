import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalelementComponent } from './chemicalelement.component';

describe('ChemicalelementComponent', () => {
  let component: ChemicalelementComponent;
  let fixture: ComponentFixture<ChemicalelementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemicalelementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemicalelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
