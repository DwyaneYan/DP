import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenNavComponent } from './children-nav.component';

describe('ChildrenNavComponent', () => {
  let component: ChildrenNavComponent;
  let fixture: ComponentFixture<ChildrenNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
