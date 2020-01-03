import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BendingHomeComponent } from './bending-home.component';

describe('BendingHomeComponent', () => {
  let component: BendingHomeComponent;
  let fixture: ComponentFixture<BendingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BendingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BendingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
