import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompressionTypicalPartComponent } from './compression-typical-part.component';

describe('CompressionTypicalPartComponent', () => {
  let component: CompressionTypicalPartComponent;
  let fixture: ComponentFixture<CompressionTypicalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompressionTypicalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompressionTypicalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
