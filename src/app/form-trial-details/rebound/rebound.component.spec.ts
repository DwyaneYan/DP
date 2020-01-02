import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReboundComponent } from './rebound.component';

describe('ReboundComponent', () => {
  let component: ReboundComponent;
  let fixture: ComponentFixture<ReboundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReboundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReboundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
