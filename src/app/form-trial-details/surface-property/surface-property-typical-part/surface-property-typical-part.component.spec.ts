import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfacePropertyTypicalPartComponent } from './surface-property-typical-part.component';

describe('SurfacePropertyTypicalPartComponent', () => {
  let component: SurfacePropertyTypicalPartComponent;
  let fixture: ComponentFixture<SurfacePropertyTypicalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfacePropertyTypicalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfacePropertyTypicalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
