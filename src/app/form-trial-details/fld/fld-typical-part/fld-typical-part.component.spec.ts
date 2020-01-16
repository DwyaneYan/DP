import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FldTypicalPartComponent } from './fld-typical-part.component';

describe('FldTypicalPartComponent', () => {
  let component: FldTypicalPartComponent;
  let fixture: ComponentFixture<FldTypicalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FldTypicalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FldTypicalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
