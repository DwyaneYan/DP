import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFloatingBoxComponent } from './form-floating-box.component';

describe('FormFloatingBoxComponent', () => {
  let component: FormFloatingBoxComponent;
  let fixture: ComponentFixture<FormFloatingBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFloatingBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFloatingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
