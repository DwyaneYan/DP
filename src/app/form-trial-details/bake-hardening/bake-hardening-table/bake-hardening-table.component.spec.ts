import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeHardeningTableComponent } from './bake-hardening-table.component';

describe('BakeHardeningTableComponent', () => {
  let component: BakeHardeningTableComponent;
  let fixture: ComponentFixture<BakeHardeningTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakeHardeningTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakeHardeningTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
