import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenpoexpeditorComponent } from './openpoexpeditor.component';

describe('OpenpoexpeditorComponent', () => {
  let component: OpenpoexpeditorComponent;
  let fixture: ComponentFixture<OpenpoexpeditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenpoexpeditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenpoexpeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
