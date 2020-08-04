import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypicalPartComponent } from './typical-part.component';

describe('TypicalPartComponent', () => {
  let component: TypicalPartComponent;
  let fixture: ComponentFixture<TypicalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypicalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypicalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
