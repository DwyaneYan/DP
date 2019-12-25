import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMaterialTrialComponent } from './page-material-trial.component';

describe('PageMaterialTrialComponent', () => {
  let component: PageMaterialTrialComponent;
  let fixture: ComponentFixture<PageMaterialTrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMaterialTrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMaterialTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
