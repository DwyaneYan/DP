import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMaterialListComponent } from './form-material-list.component';

describe('FormMaterialListComponent', () => {
  let component: FormMaterialListComponent;
  let fixture: ComponentFixture<FormMaterialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMaterialListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMaterialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
