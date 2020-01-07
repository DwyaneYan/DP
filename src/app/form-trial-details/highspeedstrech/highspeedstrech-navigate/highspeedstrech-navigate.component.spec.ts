import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighspeedstrechNavigateComponent } from './highspeedstrech-navigate.component';

describe('HighspeedstrechNavigateComponent', () => {
  let component: HighspeedstrechNavigateComponent;
  let fixture: ComponentFixture<HighspeedstrechNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighspeedstrechNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighspeedstrechNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
