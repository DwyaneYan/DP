import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CementingTableComponent } from './cementing-table.component';

describe('CementingTableComponent', () => {
  let component: CementingTableComponent;
  let fixture: ComponentFixture<CementingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CementingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CementingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
