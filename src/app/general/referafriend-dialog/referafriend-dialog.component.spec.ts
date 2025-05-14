import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferafriendDialogComponent } from './referafriend-dialog.component';

describe('ReferafriendDialogComponent', () => {
  let component: ReferafriendDialogComponent;
  let fixture: ComponentFixture<ReferafriendDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferafriendDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferafriendDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
