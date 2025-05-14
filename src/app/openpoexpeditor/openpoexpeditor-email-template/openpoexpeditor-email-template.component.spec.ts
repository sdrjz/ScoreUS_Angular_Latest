import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenpoexpeditorEmailTemplateComponent } from './openpoexpeditor-email-template.component';

describe('OpenpoexpeditorEmailTemplateComponent', () => {
  let component: OpenpoexpeditorEmailTemplateComponent;
  let fixture: ComponentFixture<OpenpoexpeditorEmailTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenpoexpeditorEmailTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenpoexpeditorEmailTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
