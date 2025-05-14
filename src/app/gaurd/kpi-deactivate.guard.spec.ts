import { TestBed } from '@angular/core/testing';

import { KpiDeactivateGuard } from './kpi-deactivate.guard';

describe('KpiDeactivateGuard', () => {
  let guard: KpiDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(KpiDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
