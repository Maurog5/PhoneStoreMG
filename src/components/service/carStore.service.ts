import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarStoreService {
  totalPrice: number = 0;
  descuentoAplicado: boolean = false;

  private carSubject = new BehaviorSubject<any[]>([]);
  car$ = this.carSubject.asObservable();
  private cantidadProductosSubject = new BehaviorSubject<number>(0);
  cantidadProductos$ = this.cantidadProductosSubject.asObservable();

  agregarAlCarrito(producto: any) {
    const actualCar = this.carSubject.value;
    const newProduct = { ...producto, quantity: 1 };
    const newCar = [...actualCar, newProduct];
    this.carSubject.next(newCar);
    this.cantidadProductosSubject.next(newCar.length);
  }

  obtenerCarrito() {
    return this.carSubject.value;
  }

  obtenerCantidadProductos() {
    return this.cantidadProductosSubject.value;
  }

  actualizarCarrito(carrito: any[]) {
    this.carSubject.next(carrito);
  }

  obtenerPrecioTotal(): number {
    const carrito = this.carSubject.value;
    const cantidadProductos = carrito.reduce((total, producto) => total + producto.quantity, 0);
    const precioTotal = carrito.reduce((total, producto) => total + producto.price * producto.quantity, 0);

    // Obtener el descuento del 25% si hay más de 4 productos
    const descuento = cantidadProductos >= 4 ? this.calcularDescuento25(precioTotal) : 0;

    // Aplicar descuento
    const precioConDescuento = precioTotal - descuento;

    return precioConDescuento;
  }

  calcularDescuento25(precioTotal: number): number {
    // Aplicar descuento del 25%
    return 0.25 * precioTotal;
  }

}
