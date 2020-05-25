import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModifyCarComponent } from './form-modify-car.component';

describe('FormModifyCarComponent', () => {
  let component: FormModifyCarComponent;
  let fixture: ComponentFixture<FormModifyCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormModifyCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModifyCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
