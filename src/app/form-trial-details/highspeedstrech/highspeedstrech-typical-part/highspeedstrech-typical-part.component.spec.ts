import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighspeedstrechTypicalPartComponent } from './highspeedstrech-typical-part.component';

describe('HighspeedstrechTypicalPartComponent', () => {
  let component: HighspeedstrechTypicalPartComponent;
  let fixture: ComponentFixture<HighspeedstrechTypicalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighspeedstrechTypicalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighspeedstrechTypicalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
