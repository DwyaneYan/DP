import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlangingClaspPictureComponent } from './flanging-clasp-picture.component';

describe('FlangingClaspPictureComponent', () => {
  let component: FlangingClaspPictureComponent;
  let fixture: ComponentFixture<FlangingClaspPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlangingClaspPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlangingClaspPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
