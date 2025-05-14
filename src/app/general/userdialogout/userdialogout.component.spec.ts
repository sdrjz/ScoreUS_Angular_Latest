import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdialogoutComponent } from './userdialogout.component';

describe('UserdialogoutComponent', () => {
  let component: UserdialogoutComponent;
  let fixture: ComponentFixture<UserdialogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdialogoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdialogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
