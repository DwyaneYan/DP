import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReboundNavigateComponent } from './rebound-navigate.component';

describe('ReboundNavigateComponent', () => {
  let component: ReboundNavigateComponent;
  let fixture: ComponentFixture<ReboundNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReboundNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReboundNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
