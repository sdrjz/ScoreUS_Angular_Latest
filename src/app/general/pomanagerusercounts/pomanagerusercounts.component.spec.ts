import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomanagerusercountsComponent } from './pomanagerusercounts.component';

describe('PomanagerusercountsComponent', () => {
  let component: PomanagerusercountsComponent;
  let fixture: ComponentFixture<PomanagerusercountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PomanagerusercountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PomanagerusercountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
