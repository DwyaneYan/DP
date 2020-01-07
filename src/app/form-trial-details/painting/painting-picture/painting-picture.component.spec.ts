import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingPictureComponent } from './painting-picture.component';

describe('PaintingPictureComponent', () => {
  let component: PaintingPictureComponent;
  let fixture: ComponentFixture<PaintingPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintingPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintingPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
