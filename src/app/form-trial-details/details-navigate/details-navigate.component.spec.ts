import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsNavigateComponent } from './details-navigate.component';

describe('DetailsNavigateComponent', () => {
  let component: DetailsNavigateComponent;
  let fixture: ComponentFixture<DetailsNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
