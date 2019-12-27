import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTrialDetailsComponent } from './form-trial-details.component';

describe('FormTrialDetailsComponent', () => {
  let component: FormTrialDetailsComponent;
  let fixture: ComponentFixture<FormTrialDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTrialDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTrialDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
