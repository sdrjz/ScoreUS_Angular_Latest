import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOpenPoStatusTablegraphComponent } from './current-open-po-status-tablegraph.component';

describe('CurrentOpenPoStatusTablegraphComponent', () => {
  let component: CurrentOpenPoStatusTablegraphComponent;
  let fixture: ComponentFixture<CurrentOpenPoStatusTablegraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentOpenPoStatusTablegraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentOpenPoStatusTablegraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
