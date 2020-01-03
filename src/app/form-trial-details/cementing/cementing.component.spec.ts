import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CementingComponent } from './cementing.component';

describe('CementingComponent', () => {
  let component: CementingComponent;
  let fixture: ComponentFixture<CementingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CementingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CementingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
