import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReboundPictureComponent } from './rebound-picture.component';

describe('ReboundPictureComponent', () => {
  let component: ReboundPictureComponent;
  let fixture: ComponentFixture<ReboundPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReboundPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReboundPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
