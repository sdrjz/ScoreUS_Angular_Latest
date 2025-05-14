import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadmincompletedashboardComponent } from './superadmincompletedashboard.component';

describe('SuperadmincompletedashboardComponent', () => {
  let component: SuperadmincompletedashboardComponent;
  let fixture: ComponentFixture<SuperadmincompletedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadmincompletedashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperadmincompletedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
