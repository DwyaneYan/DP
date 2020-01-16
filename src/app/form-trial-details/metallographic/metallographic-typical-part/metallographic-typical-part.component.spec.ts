import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetallographicTypicalPartComponent } from './metallographic-typical-part.component';

describe('MetallographicTypicalPartComponent', () => {
  let component: MetallographicTypicalPartComponent;
  let fixture: ComponentFixture<MetallographicTypicalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetallographicTypicalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetallographicTypicalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
