import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDisplayNavigationComponent } from './form-display-navigation.component';

describe('FormDisplayNavigationComponent', () => {
  let component: FormDisplayNavigationComponent;
  let fixture: ComponentFixture<FormDisplayNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDisplayNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDisplayNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
