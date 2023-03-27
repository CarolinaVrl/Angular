import { Component, EventEmitter, Input, Output } from '@angular/core';
import {AtomButtonContinueHomeDefaultComponent} from 'src/app/atoms/atom-button-continue-home-default/atom-button-continue-home-default.component'
import { ButtonservicesService } from 'src/services/buttonservices.service';
@Component({
  selector: 'app-organism-modal-solicturequest-default',
  templateUrl: './organism-modal-solicturequest-default.component.html',
  styleUrls: ['./organism-modal-solicturequest-default.component.css']
})
export class OrganismModalSolicturequestDefaultComponent {
  constructor(private buttonService:ButtonservicesService){
    

  }
  public continue:{
    istrue:boolean
  } 

  ngOnInit():void{
    this.buttonService.showModal.subscribe(data=> this.continue  = data)
    
   
    
  }

}
