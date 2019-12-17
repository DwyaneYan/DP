import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormLoginDialogComponent } from './form-login-dialog.component';

describe('FormLoginDialogComponent', () => {
  let component: FormLoginDialogComponent;
  let fixture: ComponentFixture<FormLoginDialogComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLoginDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLoginDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
