import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTypicpartListComponent } from './form-typicpart-list.component';

describe('FormTypicpartListComponent', () => {
  let component: FormTypicpartListComponent;
  let fixture: ComponentFixture<FormTypicpartListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTypicpartListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTypicpartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
