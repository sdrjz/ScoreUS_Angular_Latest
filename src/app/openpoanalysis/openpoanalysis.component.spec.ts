import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenpoanalysisComponent } from './openpoanalysis.component';

describe('OpenpoanalysisComponent', () => {
  let component: OpenpoanalysisComponent;
  let fixture: ComponentFixture<OpenpoanalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenpoanalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenpoanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
