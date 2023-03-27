import { Component, Output } from '@angular/core';
import { ButtonservicesService } from '../../../services/buttonservices.service';

@Component({
  selector: 'app-atom-button-continue-home-default',
  templateUrl: './atom-button-continue-home-default.component.html',
  styleUrls: ['./atom-button-continue-home-default.component.css']
})
export class AtomButtonContinueHomeDefaultComponent {

  isContinue = false;

  

  constructor(private buttonService:ButtonservicesService){

  }

  change(){
    this.isContinue=(!this.isContinue)
    this.buttonService.showModal.emit({data:this.isContinue})
    
    
  
  }

  
 
  
 


  


}
