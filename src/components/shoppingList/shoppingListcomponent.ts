import { Component, OnInit } from '@angular/core';
import { CarStoreService } from '../service/carStore.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shoppingList.component.html',
  styleUrls: ['./shoppingList.component.css']
})
export class CarStoreComponent implements OnInit {
  shoppingCar: any[] = [];
  viewCart = false;
  descuent25: number = 0;

  //para ver el precio total 
  totalPrice: number = 0;
  
  onProductClick() {
    this.viewCart = false;
  }
  
  constructor(
    private carStoreService: CarStoreService,
    ) {}
    
    ngOnInit() {
      this.carStoreService.car$.subscribe((car) => {
        this.shoppingCar = car;
        this.actualizarTotalPrice();
        this.actualizarPrecioTotalDesc();
      });
    }
    private actualizarPrecioTotalDesc() {
      this.descuent25 = this.carStoreService.obtenerPrecioTotal(); 
  }
  
    private actualizarTotalPrice() {
      this.totalPrice = this.shoppingCar.reduce((total, producto) => total + producto.price * producto.quantity, 0);
    }
    
  //TODO BOTONERA PARA AUMENTAR Y DISMINUIR LA CANTIDAD DE PRODUCTOS 
  aumentarCantidad(producto: any) {
    const index = this.shoppingCar.findIndex(p => p.id === producto.id);
    if (index !== -1) {
      this.shoppingCar[index].quantity++;
      this.actualizarTotalPrice();
      this.carStoreService.actualizarCarrito(this.shoppingCar);
    }
  }

  disminuirCantidad(producto: any) {
    const index = this.shoppingCar.findIndex(p => p.id === producto.id);
    if (index !== -1 && this.shoppingCar[index].quantity > 1) {
      this.shoppingCar[index].quantity--;
      this.actualizarTotalPrice();
      this.carStoreService.actualizarCarrito(this.shoppingCar);
    }
  }

  

  //TODO BOTONERA DE DESCUENTOS POR TIPO 
  Descuent100() {
  // Verifico que el totalPrice sea mayor o igual a 100 antes de aplicar el descuento
  if (this.totalPrice >= 100) {
    this.totalPrice -= 100; // Resto 100 al totalPrice
  } else {
    console.log('No se puede aplicar un descuento de 100 porque el total es menor a 100');
  }
}

Descuent300() {
  if (this.totalPrice >= 300) {
    this.totalPrice -= 300; 
  } else {
    console.log('No se puede aplicar un descuento de 300 porque el total es menor a 300');
  }
}
Descuent500() {
  if (this.totalPrice >= 500) {
    this.totalPrice -= 500; 
  } else {
    console.log('No se puede aplicar un descuento de 500 porque el total es menor a 500');
  }
}
 
}
