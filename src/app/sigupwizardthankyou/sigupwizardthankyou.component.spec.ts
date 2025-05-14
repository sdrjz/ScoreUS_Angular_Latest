import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigupwizardthankyouComponent } from './sigupwizardthankyou.component';

describe('SigupwizardthankyouComponent', () => {
  let component: SigupwizardthankyouComponent;
  let fixture: ComponentFixture<SigupwizardthankyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigupwizardthankyouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigupwizardthankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
