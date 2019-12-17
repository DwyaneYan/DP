import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDisplayTypicalPartComponent } from './page-display-typical-part.component';

describe('PageDisplayTypicalPartComponent', () => {
  let component: PageDisplayTypicalPartComponent;
  let fixture: ComponentFixture<PageDisplayTypicalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDisplayTypicalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDisplayTypicalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
