import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProhibitedSubstanceNavigateComponent } from './prohibited-substance-navigate.component';

describe('ProhibitedSubstanceNavigateComponent', () => {
  let component: ProhibitedSubstanceNavigateComponent;
  let fixture: ComponentFixture<ProhibitedSubstanceNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProhibitedSubstanceNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProhibitedSubstanceNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
