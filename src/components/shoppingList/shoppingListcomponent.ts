import { Component, OnInit } from '@angular/core';
import { CarStoreService } from '../service/carStore.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  tipoDescuento: string = 'comun'; // Tipo de descuento predeterminado

  onProductClick() {
    this.viewCart = false;
  }

  constructor(
    private carStoreService: CarStoreService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.carStoreService.car$.subscribe((car) => {
      this.shoppingCar = car;
      this.actualizarTotalPrice();
      this.actualizarPrecioTotalDesc();
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

  // Actualizar el tipo de descuento
  cambiarTipoDescuento(tipo: string) {
    this.tipoDescuento = tipo;
    this.actualizarTotalPrice()
  }

  private actualizarPrecioTotalDesc() {
    this.descuent25 = this.carStoreService.obtenerPrecioTotal(); 
}

  private actualizarTotalPrice() {
    this.totalPrice = this.shoppingCar.reduce((total, producto) => total + producto.price * producto.quantity, 0);
  }

  // Simular compra 
  realizarCompra() {
    const snackBarRef = this.snackBar.open('¡Compra realizada con éxito!', 'Cerrar');
    snackBarRef.afterDismissed().subscribe(() => {
    });
  }
}
