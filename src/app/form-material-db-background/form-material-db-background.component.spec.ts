import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMaterialDbBackgroundComponent } from './form-material-db-background.component';

describe('FormMaterialDbBackgroundComponent', () => {
  let component: FormMaterialDbBackgroundComponent;
  let fixture: ComponentFixture<FormMaterialDbBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMaterialDbBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMaterialDbBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
