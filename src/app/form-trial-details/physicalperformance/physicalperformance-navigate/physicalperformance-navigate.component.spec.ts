import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalperformanceNavigateComponent } from './physicalperformance-navigate.component';

describe('PhysicalperformanceNavigateComponent', () => {
  let component: PhysicalperformanceNavigateComponent;
  let fixture: ComponentFixture<PhysicalperformanceNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalperformanceNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalperformanceNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
