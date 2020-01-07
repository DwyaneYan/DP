import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowcyclefatiguePictureComponent } from './lowcyclefatigue-picture.component';

describe('LowcyclefatiguePictureComponent', () => {
  let component: LowcyclefatiguePictureComponent;
  let fixture: ComponentFixture<LowcyclefatiguePictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowcyclefatiguePictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowcyclefatiguePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
