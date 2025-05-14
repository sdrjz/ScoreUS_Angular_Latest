import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadtimecheckhistoryComponent } from './leadtimecheckhistory.component';

describe('LeadtimecheckhistoryComponent', () => {
  let component: LeadtimecheckhistoryComponent;
  let fixture: ComponentFixture<LeadtimecheckhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadtimecheckhistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadtimecheckhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
