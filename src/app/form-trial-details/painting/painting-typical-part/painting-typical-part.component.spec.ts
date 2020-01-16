import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingTypicalPartComponent } from './painting-typical-part.component';

describe('PaintingTypicalPartComponent', () => {
  let component: PaintingTypicalPartComponent;
  let fixture: ComponentFixture<PaintingTypicalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintingTypicalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintingTypicalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
