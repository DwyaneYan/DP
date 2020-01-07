import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompressionNavigateComponent } from './compression-navigate.component';

describe('CompressionNavigateComponent', () => {
  let component: CompressionNavigateComponent;
  let fixture: ComponentFixture<CompressionNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompressionNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompressionNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
