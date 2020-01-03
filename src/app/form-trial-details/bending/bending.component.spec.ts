import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BendingComponent } from './bending.component';

describe('BendingComponent', () => {
  let component: BendingComponent;
  let fixture: ComponentFixture<BendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
