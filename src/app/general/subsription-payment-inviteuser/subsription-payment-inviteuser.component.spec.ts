import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsriptionPaymentInviteuserComponent } from './subsription-payment-inviteuser.component';

describe('SubsriptionPaymentInviteuserComponent', () => {
  let component: SubsriptionPaymentInviteuserComponent;
  let fixture: ComponentFixture<SubsriptionPaymentInviteuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsriptionPaymentInviteuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsriptionPaymentInviteuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
