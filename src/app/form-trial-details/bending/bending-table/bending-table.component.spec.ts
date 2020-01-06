import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BendingTableComponent } from './bending-table.component';

describe('BendingTableComponent', () => {
  let component: BendingTableComponent;
  let fixture: ComponentFixture<BendingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BendingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BendingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
