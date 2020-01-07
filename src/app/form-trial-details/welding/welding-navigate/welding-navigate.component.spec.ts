import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeldingNavigateComponent } from './welding-navigate.component';

describe('WeldingNavigateComponent', () => {
  let component: WeldingNavigateComponent;
  let fixture: ComponentFixture<WeldingNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeldingNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeldingNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
