import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarStoreComponent } from 'src/components/shoppingList/shoppingListcomponent';
import { SuccessfulSaleComponent } from 'src/components/successful-sale/successful-sale.component';
import {AboutComponent} from '../components/about/about.component'
import {HomeComponent} from '../components/home/home.component'
import { FormComponent } from '../components/form/form.component';
const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'about', component: AboutComponent }, 
  { path: 'form', component: FormComponent }, 
  { path: 'store', component: CarStoreComponent }, 
  { path: 'successfulSale', component: SuccessfulSaleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }