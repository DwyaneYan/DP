import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetallographicNavigateComponent } from './metallographic-navigate.component';

describe('MetallographicNavigateComponent', () => {
  let component: MetallographicNavigateComponent;
  let fixture: ComponentFixture<MetallographicNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetallographicNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetallographicNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
