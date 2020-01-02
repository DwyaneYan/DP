import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlangingClaspComponent } from './flanging-clasp.component';

describe('FlangingClaspComponent', () => {
  let component: FlangingClaspComponent;
  let fixture: ComponentFixture<FlangingClaspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlangingClaspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlangingClaspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
