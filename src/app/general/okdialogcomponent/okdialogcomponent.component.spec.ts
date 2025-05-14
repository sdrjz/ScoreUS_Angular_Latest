import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkdialogcomponentComponent } from './okdialogcomponent.component';

describe('OkdialogcomponentComponent', () => {
  let component: OkdialogcomponentComponent;
  let fixture: ComponentFixture<OkdialogcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OkdialogcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OkdialogcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
