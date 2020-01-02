import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfacePropertyComponent } from './surface-property.component';

describe('SurfacePropertyComponent', () => {
  let component: SurfacePropertyComponent;
  let fixture: ComponentFixture<SurfacePropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfacePropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfacePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
