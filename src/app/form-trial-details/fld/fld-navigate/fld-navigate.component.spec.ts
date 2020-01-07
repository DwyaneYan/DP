import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FldNavigateComponent } from './fld-navigate.component';

describe('FldNavigateComponent', () => {
  let component: FldNavigateComponent;
  let fixture: ComponentFixture<FldNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FldNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FldNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
