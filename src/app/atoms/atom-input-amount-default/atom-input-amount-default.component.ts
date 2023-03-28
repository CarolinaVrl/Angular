import { Component } from '@angular/core';

@Component({
  selector: 'app-atom-input-amount-default',
  templateUrl: './atom-input-amount-default.component.html',
  styleUrls: ['./atom-input-amount-default.component.css']
})
export class AtomInputAmountDefaultComponent {
  onlyNumber(e:any) {
    let value = e.which || e.keycode;
    if ((value >= 48 && value <= 57))
      return true;
    else
    return false
  }
}





