import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtomButtonLoantermDefaultComponent } from './atoms/atom-button-loanterm-default/atom-button-loanterm-default.component';
import { PageMainpageHomeDefaultComponent } from './pages/page-mainpage-home-default/page-mainpage-home-default.component';

import { OrganismCardAmountRequestDefaultComponent } from './organism/organism-card-amount-request-default/organism-card-amount-request-default.component';
import { AtomInputAmountDefaultComponent } from './atoms/atom-input-amount-default/atom-input-amount-default.component';
import { AtomButtonContinueHomeDefaultComponent } from './atoms/atom-button-continue-home-default/atom-button-continue-home-default.component';
import { AtomTextSolicitedDefaultComponent } from './atoms/atom-text-solicited-default/atom-text-solicited-default.component';
import { AtomIconHomeDefaultComponent } from './atoms/atom-icon-home-default/atom-icon-home-default.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { OrganismModalSolicturequestDefaultComponent } from './organism/organism-modal-solicturequest-default/organism-modal-solicturequest-default.component';
import { AtomIconMessageModalDefaultComponent } from './atoms/atom-icon-message-modal-default/atom-icon-message-modal-default.component';
import { AtomTextModalDefaultComponent } from './atoms/atom-text-modal-default/atom-text-modal-default.component';
import { OrganismNavbarHomeDefaultComponent } from './organism/organism-navbar-home-default/organism-navbar-home-default.component';




@NgModule({
  declarations: [
    AppComponent,
    AtomButtonLoantermDefaultComponent,
    PageMainpageHomeDefaultComponent,
    
    OrganismCardAmountRequestDefaultComponent,
    AtomInputAmountDefaultComponent,
    AtomButtonContinueHomeDefaultComponent,
    AtomTextSolicitedDefaultComponent,
    AtomIconHomeDefaultComponent,
    OrganismModalSolicturequestDefaultComponent,
    AtomIconMessageModalDefaultComponent,
    AtomTextModalDefaultComponent,
    OrganismNavbarHomeDefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
