import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetallographicPictureComponent } from './metallographic-picture.component';

describe('MetallographicPictureComponent', () => {
  let component: MetallographicPictureComponent;
  let fixture: ComponentFixture<MetallographicPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetallographicPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetallographicPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
