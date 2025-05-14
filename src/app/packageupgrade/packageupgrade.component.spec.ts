import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageupgradeComponent } from './packageupgrade.component';

describe('PackageupgradeComponent', () => {
  let component: PackageupgradeComponent;
  let fixture: ComponentFixture<PackageupgradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageupgradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageupgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
