import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminscorecarddashboardComponent } from './superadminscorecarddashboard.component';

describe('SuperadminscorecarddashboardComponent', () => {
  let component: SuperadminscorecarddashboardComponent;
  let fixture: ComponentFixture<SuperadminscorecarddashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminscorecarddashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperadminscorecarddashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
