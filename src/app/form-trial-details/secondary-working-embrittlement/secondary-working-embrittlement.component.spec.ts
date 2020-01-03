import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryWorkingEmbrittlementComponent } from './secondary-working-embrittlement.component';

describe('SecondaryWorkingEmbrittlementComponent', () => {
  let component: SecondaryWorkingEmbrittlementComponent;
  let fixture: ComponentFixture<SecondaryWorkingEmbrittlementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryWorkingEmbrittlementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryWorkingEmbrittlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
