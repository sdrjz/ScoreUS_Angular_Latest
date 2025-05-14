import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenpostatusComponent } from './openpostatus.component';

describe('OpenpostatusComponent', () => {
  let component: OpenpostatusComponent;
  let fixture: ComponentFixture<OpenpostatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenpostatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenpostatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
