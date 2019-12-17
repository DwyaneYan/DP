import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConstractComponent } from './page-constract.component';

describe('PageConstractComponent', () => {
  let component: PageConstractComponent;
  let fixture: ComponentFixture<PageConstractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageConstractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageConstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
