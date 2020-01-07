import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlangingClaspTableComponent } from './flanging-clasp-table.component';

describe('FlangingClaspTableComponent', () => {
  let component: FlangingClaspTableComponent;
  let fixture: ComponentFixture<FlangingClaspTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlangingClaspTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlangingClaspTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
