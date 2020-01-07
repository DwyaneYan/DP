import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighcyclefatiguePictureComponent } from './highcyclefatigue-picture.component';

describe('HighcyclefatiguePictureComponent', () => {
  let component: HighcyclefatiguePictureComponent;
  let fixture: ComponentFixture<HighcyclefatiguePictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighcyclefatiguePictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighcyclefatiguePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
