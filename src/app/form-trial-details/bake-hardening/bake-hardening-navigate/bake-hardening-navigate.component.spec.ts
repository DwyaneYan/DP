import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeHardeningNavigateComponent } from './bake-hardening-navigate.component';

describe('BakeHardeningNavigateComponent', () => {
  let component: BakeHardeningNavigateComponent;
  let fixture: ComponentFixture<BakeHardeningNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakeHardeningNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakeHardeningNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
