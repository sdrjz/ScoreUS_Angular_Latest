import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BuyerEventsService {
  private resetSubject = new Subject<void>();
  reset$ = this.resetSubject.asObservable();

  triggerReset() {
    this.resetSubject.next();
  }
}
