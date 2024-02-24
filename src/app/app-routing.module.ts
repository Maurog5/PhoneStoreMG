import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgradecimientoComponent } from 'src/components/agradecimiento/agradecimiento.component';
import { CarStoreComponent } from 'src/components/shoppingList/shoppingListcomponent';
import {AboutComponent} from '../components/about/about.component'
import {HomeComponent} from '../components/home/home.component'
const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'about', component: AboutComponent }, 
  { path: 'store', component: CarStoreComponent }, 
  { path: 'agradecimiento', component: AgradecimientoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }