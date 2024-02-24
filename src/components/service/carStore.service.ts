import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarStoreService {
  private tipoDescuentoActual: string = 'comun';
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

  obtenerPrecioTotal(tipoDescuento: string = 'comun'): number {
    const carrito = this.carSubject.value;
    const cantidadProductos = carrito.reduce((total, producto) => total + producto.quantity, 0);
    const precioTotal = carrito.reduce((total, producto) => total + producto.price * producto.quantity, 0);

    const descuentoPorTipo = this.calcularDescuentoTipo(tipoDescuento, cantidadProductos, precioTotal);

    return precioTotal - descuentoPorTipo;
  }

  calcularDescuentoTipo(tipoDescuento: string, cantidadProductos: number, precioTotal: number): number {
    let descuentoTotal = 0;

    // Descuento del 25% si hay 4 o más productos
    if (cantidadProductos >= 4) {
      descuentoTotal += 0.25 * precioTotal;
    }

    // Descuento según el tipo
    switch (tipoDescuento) {
      case 'comun':
        descuentoTotal += cantidadProductos >= 10 ? 100 : 0;
        break;
      case 'vip':
        descuentoTotal += cantidadProductos >= 10 ? 300 : 0;
        break;
      case 'especial':
        descuentoTotal += cantidadProductos >= 10 ? 500 : 0;
        break;
      default:
        break;
    }

    return descuentoTotal;
  }

  aplicarDescuento100() {
    const carrito = this.carSubject.value;
    const descuento100 = this.calcularDescuentoTipo('comun', carrito.length, this.obtenerPrecioTotal('comun'));
    const precioTotal = this.obtenerPrecioTotal('comun');
    return precioTotal - descuento100;
  }

  aplicarDescuento300() {
    const carrito = this.carSubject.value;
    const descuento300 = this.calcularDescuentoTipo('vip', carrito.length, this.obtenerPrecioTotal('vip'));
    const precioTotal = this.obtenerPrecioTotal('vip');
    return precioTotal - descuento300;
  }

  aplicarDescuento500() {
    const carrito = this.carSubject.value;
    const descuento500 = this.calcularDescuentoTipo('especial', carrito.length, this.obtenerPrecioTotal('especial'));
    const precioTotal = this.obtenerPrecioTotal('especial');
    return precioTotal - descuento500;
  }

  cambiarTipoDescuento(tipo: string) {
    this.tipoDescuentoActual = tipo;
    // Puedes llamar a tu función de actualización aquí si es necesario
  }

  obtenerTipoDescuentoActual(): string {
    return this.tipoDescuentoActual;
  }
}
