import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryWorkingEmbrittlementTableComponent } from './secondary-working-embrittlement-table.component';

describe('SecondaryWorkingEmbrittlementTableComponent', () => {
  let component: SecondaryWorkingEmbrittlementTableComponent;
  let fixture: ComponentFixture<SecondaryWorkingEmbrittlementTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryWorkingEmbrittlementTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryWorkingEmbrittlementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
