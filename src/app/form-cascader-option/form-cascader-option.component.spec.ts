import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormCascaderOptionComponent } from './form-cascader-option.component';

describe('FormCascaderOptionComponent', () => {
  let component: FormCascaderOptionComponent;
  let fixture: ComponentFixture<FormCascaderOptionComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCascaderOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCascaderOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
