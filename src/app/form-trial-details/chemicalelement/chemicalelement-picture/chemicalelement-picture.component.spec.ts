import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalelementPictureComponent } from './chemicalelement-picture.component';

describe('ChemicalelementPictureComponent', () => {
  let component: ChemicalelementPictureComponent;
  let fixture: ComponentFixture<ChemicalelementPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemicalelementPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemicalelementPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
