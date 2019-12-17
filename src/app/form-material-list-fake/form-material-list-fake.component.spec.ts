import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMaterialListFakeComponent } from './form-material-list-fake.component';

describe('FormMaterialListFakeComponent', () => {
  let component: FormMaterialListFakeComponent;
  let fixture: ComponentFixture<FormMaterialListFakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMaterialListFakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMaterialListFakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
