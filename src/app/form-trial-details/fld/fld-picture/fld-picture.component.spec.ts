import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FldPictureComponent } from './fld-picture.component';

describe('FldPictureComponent', () => {
  let component: FldPictureComponent;
  let fixture: ComponentFixture<FldPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FldPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FldPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
