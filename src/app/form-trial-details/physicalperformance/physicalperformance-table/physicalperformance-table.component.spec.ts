import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalperformanceTableComponent } from './physicalperformance-table.component';

describe('PhysicalperformanceTableComponent', () => {
  let component: PhysicalperformanceTableComponent;
  let fixture: ComponentFixture<PhysicalperformanceTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalperformanceTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalperformanceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
