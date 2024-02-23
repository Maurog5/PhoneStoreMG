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
  //para ver el precio total 
  totalPrice: number = 0;
  onProductClick() {
    this.viewCart = false;
  }
  constructor(private carStoreService: CarStoreService) {}

  ngOnInit() {
    this.carStoreService.car$.subscribe((car) => {
      this.shoppingCar = car;
      this.actualizarTotalPrice();
    });
  }
 
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

  private actualizarTotalPrice() {
    this.totalPrice = this.shoppingCar.reduce((total, producto) => total + producto.price * producto.quantity, 0);
  }
}
