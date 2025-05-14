import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotallineDashboardComponent } from './totalline-dashboard.component';

describe('TotallineDashboardComponent', () => {
  let component: TotallineDashboardComponent;
  let fixture: ComponentFixture<TotallineDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotallineDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotallineDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
