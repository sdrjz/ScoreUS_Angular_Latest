import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomanageruserregComponent } from './pomanageruserreg.component';

describe('PomanageruserregComponent', () => {
  let component: PomanageruserregComponent;
  let fixture: ComponentFixture<PomanageruserregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PomanageruserregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PomanageruserregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
