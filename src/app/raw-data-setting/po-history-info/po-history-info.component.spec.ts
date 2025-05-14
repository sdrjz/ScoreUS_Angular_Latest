import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoHistoryInfoComponent } from './po-history-info.component';

describe('PoHistoryInfoComponent', () => {
  let component: PoHistoryInfoComponent;
  let fixture: ComponentFixture<PoHistoryInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoHistoryInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoHistoryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
