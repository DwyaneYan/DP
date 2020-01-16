import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeHardeningTypicalPartComponent } from './bake-hardening-typical-part.component';

describe('BakeHardeningTypicalPartComponent', () => {
  let component: BakeHardeningTypicalPartComponent;
  let fixture: ComponentFixture<BakeHardeningTypicalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakeHardeningTypicalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakeHardeningTypicalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
