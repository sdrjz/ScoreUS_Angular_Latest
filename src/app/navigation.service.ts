import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  touch = new EventEmitter<string>();

  constructor() {}
  emitNavChangeEvent(number) {
    this.touch.emit(number);
  }
  getNavChangeEmitter() {
    return this.touch;
  }
}
