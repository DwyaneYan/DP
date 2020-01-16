import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeldingTypicalPartComponent } from './welding-typical-part.component';

describe('WeldingTypicalPartComponent', () => {
  let component: WeldingTypicalPartComponent;
  let fixture: ComponentFixture<WeldingTypicalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeldingTypicalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeldingTypicalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
