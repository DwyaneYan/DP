import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProhibitedSubstancePictureComponent } from './prohibited-substance-picture.component';

describe('ProhibitedSubstancePictureComponent', () => {
  let component: ProhibitedSubstancePictureComponent;
  let fixture: ComponentFixture<ProhibitedSubstancePictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProhibitedSubstancePictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProhibitedSubstancePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
