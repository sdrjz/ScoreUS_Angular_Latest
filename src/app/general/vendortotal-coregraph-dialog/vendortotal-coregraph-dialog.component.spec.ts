import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendortotalCoregraphDialogComponent } from './vendortotal-coregraph-dialog.component';

describe('VendortotalCoregraphDialogComponent', () => {
  let component: VendortotalCoregraphDialogComponent;
  let fixture: ComponentFixture<VendortotalCoregraphDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendortotalCoregraphDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendortotalCoregraphDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
