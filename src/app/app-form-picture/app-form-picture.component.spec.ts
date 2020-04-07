import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFormPictureComponent } from './app-form-picture.component';

describe('AppFormPictureComponent', () => {
  let component: AppFormPictureComponent;
  let fixture: ComponentFixture<AppFormPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFormPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFormPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
