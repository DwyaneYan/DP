import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProhibitedSubstanceComponent } from './prohibited-substance.component';

describe('ProhibitedSubstanceComponent', () => {
  let component: ProhibitedSubstanceComponent;
  let fixture: ComponentFixture<ProhibitedSubstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProhibitedSubstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProhibitedSubstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
