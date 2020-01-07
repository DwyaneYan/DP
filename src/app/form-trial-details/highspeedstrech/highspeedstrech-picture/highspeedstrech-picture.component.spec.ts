import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighspeedstrechPictureComponent } from './highspeedstrech-picture.component';

describe('HighspeedstrechPictureComponent', () => {
  let component: HighspeedstrechPictureComponent;
  let fixture: ComponentFixture<HighspeedstrechPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighspeedstrechPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighspeedstrechPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
