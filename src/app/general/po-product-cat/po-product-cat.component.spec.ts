import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoProductCatComponent } from './po-product-cat.component';

describe('PoProductCatComponent', () => {
  let component: PoProductCatComponent;
  let fixture: ComponentFixture<PoProductCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoProductCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoProductCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
