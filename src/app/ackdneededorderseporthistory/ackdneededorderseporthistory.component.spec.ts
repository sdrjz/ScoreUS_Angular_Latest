import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AckdneededorderseporthistoryComponent } from './ackdneededorderseporthistory.component';

describe('AckdneededorderseporthistoryComponent', () => {
  let component: AckdneededorderseporthistoryComponent;
  let fixture: ComponentFixture<AckdneededorderseporthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AckdneededorderseporthistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AckdneededorderseporthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
