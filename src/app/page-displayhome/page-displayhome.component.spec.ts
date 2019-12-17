import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDisplayhomeComponent } from './page-displayhome.component';

describe('PageDisplayhomeComponent', () => {
  let component: PageDisplayhomeComponent;
  let fixture: ComponentFixture<PageDisplayhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDisplayhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDisplayhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
