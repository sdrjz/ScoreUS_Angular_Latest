import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminpoDashboardComponent } from './superadminpo-dashboard.component';

describe('SuperadminpoDashboardComponent', () => {
  let component: SuperadminpoDashboardComponent;
  let fixture: ComponentFixture<SuperadminpoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminpoDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperadminpoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
