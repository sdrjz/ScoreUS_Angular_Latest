import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewuserregComponent } from './newuserreg.component';

describe('NewuserregComponent', () => {
  let component: NewuserregComponent;
  let fixture: ComponentFixture<NewuserregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewuserregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewuserregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
