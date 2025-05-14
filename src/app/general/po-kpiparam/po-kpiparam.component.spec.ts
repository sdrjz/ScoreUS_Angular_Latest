import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoKpiparamComponent } from './po-kpiparam.component';

describe('PoKpiparamComponent', () => {
  let component: PoKpiparamComponent;
  let fixture: ComponentFixture<PoKpiparamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoKpiparamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoKpiparamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
