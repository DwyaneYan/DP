import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMaterialFakeComponent } from './page-material-fake.component';

describe('PageMaterialFakeComponent', () => {
  let component: PageMaterialFakeComponent;
  let fixture: ComponentFixture<PageMaterialFakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMaterialFakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMaterialFakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
