import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOpenPoStatusTablegraphDialogComponent } from './current-open-po-status-tablegraph-dialog.component';

describe('CurrentOpenPoStatusTablegraphDialogComponent', () => {
  let component: CurrentOpenPoStatusTablegraphDialogComponent;
  let fixture: ComponentFixture<CurrentOpenPoStatusTablegraphDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentOpenPoStatusTablegraphDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentOpenPoStatusTablegraphDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
