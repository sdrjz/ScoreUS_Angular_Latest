import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodatatableComponent } from './podatatable.component';

describe('PodatatableComponent', () => {
  let component: PodatatableComponent;
  let fixture: ComponentFixture<PodatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
