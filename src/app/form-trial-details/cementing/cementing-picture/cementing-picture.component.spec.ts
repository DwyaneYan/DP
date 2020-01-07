import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CementingPictureComponent } from './cementing-picture.component';

describe('CementingPictureComponent', () => {
  let component: CementingPictureComponent;
  let fixture: ComponentFixture<CementingPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CementingPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CementingPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
