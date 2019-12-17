import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePlatformComponent } from './page-platform.component';

describe('PagePlatformComponent', () => {
  let component: PagePlatformComponent;
  let fixture: ComponentFixture<PagePlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
