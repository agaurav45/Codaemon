import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CityDataComponent } from './components/city.data.component';

const routes: Routes = [
  { path: 'city', component: CityDataComponent },
  { path: '**', redirectTo: '/city' }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}
