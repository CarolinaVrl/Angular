import { Component } from '@angular/core';

@Component({
  selector: 'app-organism-navbar-home-default',
  templateUrl: './organism-navbar-home-default.component.html',
  styleUrls: ['./organism-navbar-home-default.component.css']
})
export class OrganismNavbarHomeDefaultComponent {
  open:boolean = true
  itemsNavBar = [
    'Quienes somos','Contacto', 'Ayuda', 'iniciar'
  ]
  isOpenMenu(){
    this.open = !(this.open)
    
  
  }

}
