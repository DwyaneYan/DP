import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HydrogenInducedDelayedFracturePictureComponent } from './hydrogen-induced-delayed-fracture-picture.component';

describe('HydrogenInducedDelayedFracturePictureComponent', () => {
  let component: HydrogenInducedDelayedFracturePictureComponent;
  let fixture: ComponentFixture<HydrogenInducedDelayedFracturePictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HydrogenInducedDelayedFracturePictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HydrogenInducedDelayedFracturePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
