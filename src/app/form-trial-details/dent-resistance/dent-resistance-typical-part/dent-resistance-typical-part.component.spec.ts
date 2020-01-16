import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentResistanceTypicalPartComponent } from './dent-resistance-typical-part.component';

describe('DentResistanceTypicalPartComponent', () => {
  let component: DentResistanceTypicalPartComponent;
  let fixture: ComponentFixture<DentResistanceTypicalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentResistanceTypicalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentResistanceTypicalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
