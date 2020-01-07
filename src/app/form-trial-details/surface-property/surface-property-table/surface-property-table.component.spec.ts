import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfacePropertyTableComponent } from './surface-property-table.component';

describe('SurfacePropertyTableComponent', () => {
  let component: SurfacePropertyTableComponent;
  let fixture: ComponentFixture<SurfacePropertyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfacePropertyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfacePropertyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
