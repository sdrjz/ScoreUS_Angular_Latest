import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradesubscriptionDialogComponent } from './upgradesubscription-dialog.component';

describe('UpgradesubscriptionDialogComponent', () => {
  let component: UpgradesubscriptionDialogComponent;
  let fixture: ComponentFixture<UpgradesubscriptionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradesubscriptionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradesubscriptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
