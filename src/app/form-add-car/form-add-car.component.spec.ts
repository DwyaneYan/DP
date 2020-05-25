import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddCarComponent } from './form-add-car.component';

describe('FormAddCarComponent', () => {
  let component: FormAddCarComponent;
  let fixture: ComponentFixture<FormAddCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
