import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BendingPictureComponent } from './bending-picture.component';

describe('BendingPictureComponent', () => {
  let component: BendingPictureComponent;
  let fixture: ComponentFixture<BendingPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BendingPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BendingPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
