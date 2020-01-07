import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalperformancePictureComponent } from './physicalperformance-picture.component';

describe('PhysicalperformancePictureComponent', () => {
  let component: PhysicalperformancePictureComponent;
  let fixture: ComponentFixture<PhysicalperformancePictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalperformancePictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalperformancePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
