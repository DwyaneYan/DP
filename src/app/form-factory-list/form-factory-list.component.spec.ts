import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFactoryListComponent } from './form-factory-list.component';

describe('FormFactoryListComponent', () => {
  let component: FormFactoryListComponent;
  let fixture: ComponentFixture<FormFactoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFactoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFactoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
