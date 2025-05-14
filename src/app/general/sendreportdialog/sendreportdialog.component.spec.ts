import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendreportdialogComponent } from './sendreportdialog.component';

describe('SendreportdialogComponent', () => {
  let component: SendreportdialogComponent;
  let fixture: ComponentFixture<SendreportdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendreportdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendreportdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
