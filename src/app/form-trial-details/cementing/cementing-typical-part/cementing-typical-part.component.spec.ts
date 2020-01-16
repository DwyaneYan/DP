import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CementingTypicalPartComponent } from './cementing-typical-part.component';

describe('CementingTypicalPartComponent', () => {
  let component: CementingTypicalPartComponent;
  let fixture: ComponentFixture<CementingTypicalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CementingTypicalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CementingTypicalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
