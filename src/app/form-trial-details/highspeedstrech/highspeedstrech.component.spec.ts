import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighspeedstrechComponent } from './highspeedstrech.component';

describe('HighspeedstrechComponent', () => {
  let component: HighspeedstrechComponent;
  let fixture: ComponentFixture<HighspeedstrechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighspeedstrechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighspeedstrechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
