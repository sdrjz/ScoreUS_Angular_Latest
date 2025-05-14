import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDatahistorytableComponent } from './app-datahistorytable.component';

describe('AppDatahistorytableComponent', () => {
  let component: AppDatahistorytableComponent;
  let fixture: ComponentFixture<AppDatahistorytableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDatahistorytableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDatahistorytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
