import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { CityDataComponent } from './components/city.data.component';
import { CityDataService } from './services/city.data.service';


@NgModule({
  declarations: [
    AppComponent, CityDataComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, AppRoutingModule
  ],
  providers: [CityDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
