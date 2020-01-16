import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BendingTypicalPartComponent } from './bending-typical-part.component';

describe('BendingTypicalPartComponent', () => {
  let component: BendingTypicalPartComponent;
  let fixture: ComponentFixture<BendingTypicalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BendingTypicalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BendingTypicalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
