import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralmanagementComponent } from './referralmanagement.component';

describe('ReferralmanagementComponent', () => {
  let component: ReferralmanagementComponent;
  let fixture: ComponentFixture<ReferralmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferralmanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
