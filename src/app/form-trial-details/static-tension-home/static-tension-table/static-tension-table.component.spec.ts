import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticTensionTableComponent } from './static-tension-table.component';

describe('StaticTensionTableComponent', () => {
  let component: StaticTensionTableComponent;
  let fixture: ComponentFixture<StaticTensionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticTensionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticTensionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
