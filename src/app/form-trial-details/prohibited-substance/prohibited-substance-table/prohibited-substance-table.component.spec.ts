import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProhibitedSubstanceTableComponent } from './prohibited-substance-table.component';

describe('ProhibitedSubstanceTableComponent', () => {
  let component: ProhibitedSubstanceTableComponent;
  let fixture: ComponentFixture<ProhibitedSubstanceTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProhibitedSubstanceTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProhibitedSubstanceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
