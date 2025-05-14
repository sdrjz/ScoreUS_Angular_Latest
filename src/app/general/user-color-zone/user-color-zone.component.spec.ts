import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserColorZoneComponent } from './user-color-zone.component';

describe('UserColorZoneComponent', () => {
  let component: UserColorZoneComponent;
  let fixture: ComponentFixture<UserColorZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserColorZoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserColorZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
