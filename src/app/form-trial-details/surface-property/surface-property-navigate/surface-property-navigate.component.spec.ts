import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfacePropertyNavigateComponent } from './surface-property-navigate.component';

describe('SurfacePropertyNavigateComponent', () => {
  let component: SurfacePropertyNavigateComponent;
  let fixture: ComponentFixture<SurfacePropertyNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfacePropertyNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfacePropertyNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
