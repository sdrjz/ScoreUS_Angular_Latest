import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PouserdashboardComponent } from './pouserdashboard.component';

describe('PouserdashboardComponent', () => {
  let component: PouserdashboardComponent;
  let fixture: ComponentFixture<PouserdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PouserdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PouserdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
