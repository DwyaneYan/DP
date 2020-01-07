import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeHardeningPictureComponent } from './bake-hardening-picture.component';

describe('BakeHardeningPictureComponent', () => {
  let component: BakeHardeningPictureComponent;
  let fixture: ComponentFixture<BakeHardeningPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakeHardeningPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakeHardeningPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
