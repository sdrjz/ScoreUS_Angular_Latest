import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutscoreusComponent } from './aboutscoreus.component';

describe('AboutscoreusComponent', () => {
  let component: AboutscoreusComponent;
  let fixture: ComponentFixture<AboutscoreusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutscoreusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutscoreusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
