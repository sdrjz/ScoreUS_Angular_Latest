import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturepastduereporthistoryComponent } from './futurepastduereporthistory.component';

describe('FuturepastduereporthistoryComponent', () => {
  let component: FuturepastduereporthistoryComponent;
  let fixture: ComponentFixture<FuturepastduereporthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuturepastduereporthistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturepastduereporthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
