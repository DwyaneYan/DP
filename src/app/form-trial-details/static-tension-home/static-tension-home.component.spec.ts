import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticTensionHomeComponent } from './static-tension-home.component';

describe('StaticTensionHomeComponent', () => {
  let component: StaticTensionHomeComponent;
  let fixture: ComponentFixture<StaticTensionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticTensionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticTensionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
