import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeldingTableComponent } from './welding-table.component';

describe('WeldingTableComponent', () => {
  let component: WeldingTableComponent;
  let fixture: ComponentFixture<WeldingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeldingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeldingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
