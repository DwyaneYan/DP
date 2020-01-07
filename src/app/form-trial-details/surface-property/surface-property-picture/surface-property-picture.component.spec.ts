import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfacePropertyPictureComponent } from './surface-property-picture.component';

describe('SurfacePropertyPictureComponent', () => {
  let component: SurfacePropertyPictureComponent;
  let fixture: ComponentFixture<SurfacePropertyPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfacePropertyPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfacePropertyPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
