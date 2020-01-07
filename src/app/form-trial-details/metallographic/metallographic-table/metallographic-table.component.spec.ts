import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetallographicTableComponent } from './metallographic-table.component';

describe('MetallographicTableComponent', () => {
  let component: MetallographicTableComponent;
  let fixture: ComponentFixture<MetallographicTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetallographicTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetallographicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
