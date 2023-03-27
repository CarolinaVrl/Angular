import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonservicesService {
  @Output()showModal:EventEmitter<any> =new EventEmitter()

  constructor() { }
}
