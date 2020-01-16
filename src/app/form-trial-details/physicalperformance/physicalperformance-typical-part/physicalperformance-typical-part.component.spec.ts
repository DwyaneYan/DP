import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalperformanceTypicalPartComponent } from './physicalperformance-typical-part.component';

describe('PhysicalperformanceTypicalPartComponent', () => {
  let component: PhysicalperformanceTypicalPartComponent;
  let fixture: ComponentFixture<PhysicalperformanceTypicalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalperformanceTypicalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalperformanceTypicalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
