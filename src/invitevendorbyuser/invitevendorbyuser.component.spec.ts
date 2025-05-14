import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitevendorbyuserComponent } from './invitevendorbyuser.component';

describe('InvitevendorbyuserComponent', () => {
  let component: InvitevendorbyuserComponent;
  let fixture: ComponentFixture<InvitevendorbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitevendorbyuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitevendorbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
