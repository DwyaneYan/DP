import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProhibitedSubstanceTypicalPartComponent } from './prohibited-substance-typical-part.component';

describe('ProhibitedSubstanceTypicalPartComponent', () => {
  let component: ProhibitedSubstanceTypicalPartComponent;
  let fixture: ComponentFixture<ProhibitedSubstanceTypicalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProhibitedSubstanceTypicalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProhibitedSubstanceTypicalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
