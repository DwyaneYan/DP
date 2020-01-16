import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryWorkingEmbrittlementTypicalPartComponent } from './secondary-working-embrittlement-typical-part.component';

describe('SecondaryWorkingEmbrittlementTypicalPartComponent', () => {
  let component: SecondaryWorkingEmbrittlementTypicalPartComponent;
  let fixture: ComponentFixture<SecondaryWorkingEmbrittlementTypicalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryWorkingEmbrittlementTypicalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryWorkingEmbrittlementTypicalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
