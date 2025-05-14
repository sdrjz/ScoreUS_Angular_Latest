import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphlargetcComponent } from './graphlargetc.component';

describe('GraphlargetcComponent', () => {
  let component: GraphlargetcComponent;
  let fixture: ComponentFixture<GraphlargetcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphlargetcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphlargetcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
