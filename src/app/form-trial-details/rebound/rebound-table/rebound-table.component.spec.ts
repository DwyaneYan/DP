import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReboundTableComponent } from './rebound-table.component';

describe('ReboundTableComponent', () => {
  let component: ReboundTableComponent;
  let fixture: ComponentFixture<ReboundTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReboundTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReboundTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
