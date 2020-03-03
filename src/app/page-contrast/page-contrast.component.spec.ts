import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContrastComponent } from './page-contrast.component';

describe('PageContrastComponent', () => {
  let component: PageContrastComponent;
  let fixture: ComponentFixture<PageContrastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageContrastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContrastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
