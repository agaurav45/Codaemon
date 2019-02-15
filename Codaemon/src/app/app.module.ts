import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from '@angular/common';
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
  providers: [
	CityDataService,
	{ provide: APP_BASE_HREF, useValue: '/' },
	{ provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
