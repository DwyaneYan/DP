import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExperimentalItemComponent } from './form-experimental-item.component';

describe('FormExperimentalItemComponent', () => {
  let component: FormExperimentalItemComponent;
  let fixture: ComponentFixture<FormExperimentalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormExperimentalItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExperimentalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
