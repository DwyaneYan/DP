import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailnameComponent } from './trailname.component';

describe('TrailnameComponent', () => {
  let component: TrailnameComponent;
  let fixture: ComponentFixture<TrailnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
