import { TestBed } from '@angular/core/testing';

import { KpiPODeactivateGuard } from './kpi-po-deactivate.guard';

describe('KpiDeactivateGuard', () => {
  let guard: KpiPODeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(KpiPODeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
