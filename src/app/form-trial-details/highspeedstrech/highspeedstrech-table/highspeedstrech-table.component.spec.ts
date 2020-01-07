import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighspeedstrechTableComponent } from './highspeedstrech-table.component';

describe('HighspeedstrechTableComponent', () => {
  let component: HighspeedstrechTableComponent;
  let fixture: ComponentFixture<HighspeedstrechTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighspeedstrechTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighspeedstrechTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
