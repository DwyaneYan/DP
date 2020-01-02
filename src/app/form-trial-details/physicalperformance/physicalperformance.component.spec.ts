import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalperformanceComponent } from './physicalperformance.component';

describe('PhysicalperformanceComponent', () => {
  let component: PhysicalperformanceComponent;
  let fixture: ComponentFixture<PhysicalperformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalperformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalperformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
