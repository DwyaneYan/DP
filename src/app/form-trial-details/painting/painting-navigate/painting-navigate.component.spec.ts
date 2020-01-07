import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingNavigateComponent } from './painting-navigate.component';

describe('PaintingNavigateComponent', () => {
  let component: PaintingNavigateComponent;
  let fixture: ComponentFixture<PaintingNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintingNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintingNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
