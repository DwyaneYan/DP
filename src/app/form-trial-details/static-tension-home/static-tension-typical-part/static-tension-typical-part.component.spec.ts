import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticTensionTypicalPartComponent } from './static-tension-typical-part.component';

describe('StaticTensionTypicalPartComponent', () => {
  let component: StaticTensionTypicalPartComponent;
  let fixture: ComponentFixture<StaticTensionTypicalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticTensionTypicalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticTensionTypicalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
