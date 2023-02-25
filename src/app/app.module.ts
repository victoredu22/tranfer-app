import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalModule } from './global/global.module';

import { HttpClientModule } from '@angular/common/http';
import { RutModule } from 'rut-chileno';import {AutocompleteLibModule} from 'angular-ng-autocomplete';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AutocompleteLibModule,GlobalModule, HttpClientModule, RutModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
