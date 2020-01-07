import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentResistancePictureComponent } from './dent-resistance-picture.component';

describe('DentResistancePictureComponent', () => {
  let component: DentResistancePictureComponent;
  let fixture: ComponentFixture<DentResistancePictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentResistancePictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentResistancePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
