import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAttributeConstractComponent } from './page-attribute-constract.component';

describe('PageAttributeConstractComponent', () => {
  let component: PageAttributeConstractComponent;
  let fixture: ComponentFixture<PageAttributeConstractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAttributeConstractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAttributeConstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
