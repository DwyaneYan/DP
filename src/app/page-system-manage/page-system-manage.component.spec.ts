import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSystemManageComponent } from './page-system-manage.component';

describe('PageSystemManageComponent', () => {
  let component: PageSystemManageComponent;
  let fixture: ComponentFixture<PageSystemManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSystemManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSystemManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
