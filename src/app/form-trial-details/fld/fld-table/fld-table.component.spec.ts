import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FldTableComponent } from './fld-table.component';

describe('FldTableComponent', () => {
  let component: FldTableComponent;
  let fixture: ComponentFixture<FldTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FldTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FldTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
