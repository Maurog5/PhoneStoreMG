import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import {AboutComponent} from '../components/about/about.component';
import { HomeComponent } from '../components/home/home.component';
import { CardComponent} from 'src/components/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatIconModule } from '@angular/material/icon';
import { CarStoreComponent } from '../components/shoppingList/shoppingListcomponent';
import { CarStoreService } from 'src/components/service/carStore.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SuccessfulSaleComponent } from 'src/components/successful-sale/successful-sale.component';
import { FormComponent } from '../components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    CardComponent,
    CarStoreComponent,
    SuccessfulSaleComponent,
    FormComponent,
    
    
  ],
 
  
  imports: [BrowserModule,
     FormsModule,
     AppRoutingModule,
     HttpClientModule,
     AppRoutingModule,
     RouterModule,
     BrowserAnimationsModule,
     SlickCarouselModule,
     MatIconModule,
     MatDialogModule,
     MatSnackBarModule,
     MatTooltipModule,
     ReactiveFormsModule,
     HttpClientModule
  ],

    providers: [CarStoreService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
