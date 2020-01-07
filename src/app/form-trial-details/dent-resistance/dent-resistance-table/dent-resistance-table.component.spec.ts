import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentResistanceTableComponent } from './dent-resistance-table.component';

describe('DentResistanceTableComponent', () => {
  let component: DentResistanceTableComponent;
  let fixture: ComponentFixture<DentResistanceTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentResistanceTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentResistanceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
