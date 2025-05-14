import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetpopupComponent } from './targetpopup.component';

describe('TargetpopupComponent', () => {
  let component: TargetpopupComponent;
  let fixture: ComponentFixture<TargetpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
