import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CementingNavigateComponent } from './cementing-navigate.component';

describe('CementingNavigateComponent', () => {
  let component: CementingNavigateComponent;
  let fixture: ComponentFixture<CementingNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CementingNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CementingNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
