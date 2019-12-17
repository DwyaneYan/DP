import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMaterialFloatingBoxComponent } from './page-material-floating-box.component';

describe('PageMaterialFloatingBoxComponent', () => {
  let component: PageMaterialFloatingBoxComponent;
  let fixture: ComponentFixture<PageMaterialFloatingBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMaterialFloatingBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMaterialFloatingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
