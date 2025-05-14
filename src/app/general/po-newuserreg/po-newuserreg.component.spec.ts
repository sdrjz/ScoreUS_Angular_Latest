import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoNewuserregComponent } from './po-newuserreg.component';

describe('PoNewuserregComponent', () => {
  let component: PoNewuserregComponent;
  let fixture: ComponentFixture<PoNewuserregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoNewuserregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoNewuserregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
