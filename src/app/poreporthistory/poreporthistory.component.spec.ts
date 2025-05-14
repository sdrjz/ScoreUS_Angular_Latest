import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoreporthistoryComponent } from './poreporthistory.component';

describe('PoreporthistoryComponent', () => {
  let component: PoreporthistoryComponent;
  let fixture: ComponentFixture<PoreporthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoreporthistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoreporthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
