import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticTensionPictureComponent } from './static-tension-picture.component';

describe('StaticTensionPictureComponent', () => {
  let component: StaticTensionPictureComponent;
  let fixture: ComponentFixture<StaticTensionPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticTensionPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticTensionPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
