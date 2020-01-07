import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingTableComponent } from './painting-table.component';

describe('PaintingTableComponent', () => {
  let component: PaintingTableComponent;
  let fixture: ComponentFixture<PaintingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
