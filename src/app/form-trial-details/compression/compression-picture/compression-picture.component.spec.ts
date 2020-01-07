import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompressionPictureComponent } from './compression-picture.component';

describe('CompressionPictureComponent', () => {
  let component: CompressionPictureComponent;
  let fixture: ComponentFixture<CompressionPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompressionPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompressionPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
