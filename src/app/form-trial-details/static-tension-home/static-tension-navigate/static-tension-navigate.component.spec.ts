import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticTensionNavigateComponent } from './static-tension-navigate.component';

describe('StaticTensionNavigateComponent', () => {
  let component: StaticTensionNavigateComponent;
  let fixture: ComponentFixture<StaticTensionNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticTensionNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticTensionNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
