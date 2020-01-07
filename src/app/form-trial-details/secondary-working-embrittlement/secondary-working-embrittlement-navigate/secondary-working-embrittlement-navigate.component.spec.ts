import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryWorkingEmbrittlementNavigateComponent } from './secondary-working-embrittlement-navigate.component';

describe('SecondaryWorkingEmbrittlementNavigateComponent', () => {
  let component: SecondaryWorkingEmbrittlementNavigateComponent;
  let fixture: ComponentFixture<SecondaryWorkingEmbrittlementNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryWorkingEmbrittlementNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryWorkingEmbrittlementNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
