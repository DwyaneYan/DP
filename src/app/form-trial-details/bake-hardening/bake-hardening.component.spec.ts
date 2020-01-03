import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeHardeningComponent } from './bake-hardening.component';

describe('BakeHardeningComponent', () => {
  let component: BakeHardeningComponent;
  let fixture: ComponentFixture<BakeHardeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakeHardeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakeHardeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
