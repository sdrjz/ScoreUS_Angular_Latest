import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminsettingComponent } from './superadminsetting.component';

describe('SuperadminsettingComponent', () => {
  let component: SuperadminsettingComponent;
  let fixture: ComponentFixture<SuperadminsettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminsettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperadminsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
