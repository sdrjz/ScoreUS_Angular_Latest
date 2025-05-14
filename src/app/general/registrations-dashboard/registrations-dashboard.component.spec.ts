import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationsDashboardComponent } from './registrations-dashboard.component';

describe('RegistrationsDashboardComponent', () => {
  let component: RegistrationsDashboardComponent;
  let fixture: ComponentFixture<RegistrationsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
