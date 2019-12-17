import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDisplayTableComponent } from './page-display-table.component';

describe('PageDisplayTableComponent', () => {
  let component: PageDisplayTableComponent;
  let fixture: ComponentFixture<PageDisplayTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDisplayTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDisplayTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
