import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompressionTableComponent } from './compression-table.component';

describe('CompressionTableComponent', () => {
  let component: CompressionTableComponent;
  let fixture: ComponentFixture<CompressionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompressionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompressionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
