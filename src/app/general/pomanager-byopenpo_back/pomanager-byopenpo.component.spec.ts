import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomanagerByopenpoComponent } from './pomanager-byopenpo.component';

describe('PomanagerByopenpoComponent', () => {
  let component: PomanagerByopenpoComponent;
  let fixture: ComponentFixture<PomanagerByopenpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PomanagerByopenpoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PomanagerByopenpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
