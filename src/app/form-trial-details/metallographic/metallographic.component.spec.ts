import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetallographicComponent } from './metallographic.component';

describe('MetallographicComponent', () => {
  let component: MetallographicComponent;
  let fixture: ComponentFixture<MetallographicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetallographicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetallographicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
