import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlangingClaspNavigateComponent } from './flanging-clasp-navigate.component';

describe('FlangingClaspNavigateComponent', () => {
  let component: FlangingClaspNavigateComponent;
  let fixture: ComponentFixture<FlangingClaspNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlangingClaspNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlangingClaspNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
