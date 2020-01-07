import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeldingPictureComponent } from './welding-picture.component';

describe('WeldingPictureComponent', () => {
  let component: WeldingPictureComponent;
  let fixture: ComponentFixture<WeldingPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeldingPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeldingPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
