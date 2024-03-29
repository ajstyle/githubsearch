import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import {ProfileComponent} from './components/profile.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http' ; 


@NgModule({
  imports:      [ BrowserModule , HttpModule,FormsModule ],
  declarations: [ AppComponent , ProfileComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
