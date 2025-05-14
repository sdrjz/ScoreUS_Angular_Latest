import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainnavheaderComponent } from './mainnavheader.component';

describe('MainnavheaderComponent', () => {
  let component: MainnavheaderComponent;
  let fixture: ComponentFixture<MainnavheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainnavheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainnavheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
