import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FLDComponent } from './fld.component';

describe('FLDComponent', () => {
  let component: FLDComponent;
  let fixture: ComponentFixture<FLDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FLDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FLDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
