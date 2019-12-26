import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMateriaListComponent } from './form-materia-list.component';

describe('FormMateriaListComponent', () => {
  let component: FormMateriaListComponent;
  let fixture: ComponentFixture<FormMateriaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMateriaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMateriaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
