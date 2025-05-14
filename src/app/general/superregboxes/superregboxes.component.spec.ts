import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperregboxesComponent } from './superregboxes.component';

describe('SuperregboxesComponent', () => {
  let component: SuperregboxesComponent;
  let fixture: ComponentFixture<SuperregboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperregboxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperregboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
