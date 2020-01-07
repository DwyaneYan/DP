import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryWorkingEmbrittlementPictureComponent } from './secondary-working-embrittlement-picture.component';

describe('SecondaryWorkingEmbrittlementPictureComponent', () => {
  let component: SecondaryWorkingEmbrittlementPictureComponent;
  let fixture: ComponentFixture<SecondaryWorkingEmbrittlementPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryWorkingEmbrittlementPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryWorkingEmbrittlementPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
