import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDisplayPictureComponent } from './page-display-picture.component';

describe('PageDisplayPictureComponent', () => {
  let component: PageDisplayPictureComponent;
  let fixture: ComponentFixture<PageDisplayPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDisplayPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDisplayPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
