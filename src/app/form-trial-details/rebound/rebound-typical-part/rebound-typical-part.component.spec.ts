import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReboundTypicalPartComponent } from './rebound-typical-part.component';

describe('ReboundTypicalPartComponent', () => {
  let component: ReboundTypicalPartComponent;
  let fixture: ComponentFixture<ReboundTypicalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReboundTypicalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReboundTypicalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
