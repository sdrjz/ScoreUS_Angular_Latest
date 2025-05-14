import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoSendreportdialogComponent } from './po-sendreportdialog.component';

describe('PoSendreportdialogComponent', () => {
  let component: PoSendreportdialogComponent;
  let fixture: ComponentFixture<PoSendreportdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoSendreportdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoSendreportdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
