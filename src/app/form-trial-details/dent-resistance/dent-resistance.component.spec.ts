import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentResistanceComponent } from './dent-resistance.component';

describe('DentResistanceComponent', () => {
  let component: DentResistanceComponent;
  let fixture: ComponentFixture<DentResistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentResistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentResistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
