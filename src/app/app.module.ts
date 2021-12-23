import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Main routes
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';

const ANGULAR_MODULES = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MaterialModule,
  SharedModule
];

@NgModule({
  declarations: [ AppComponent ],
  imports: [ ...ANGULAR_MODULES ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
