import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlangingClaspTypicalPartComponent } from './flanging-clasp-typical-part.component';

describe('FlangingClaspTypicalPartComponent', () => {
  let component: FlangingClaspTypicalPartComponent;
  let fixture: ComponentFixture<FlangingClaspTypicalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlangingClaspTypicalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlangingClaspTypicalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
