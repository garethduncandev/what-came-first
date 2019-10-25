import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChickenEggComponent } from './components/chicken-egg/chicken-egg.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ChickenEggComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
