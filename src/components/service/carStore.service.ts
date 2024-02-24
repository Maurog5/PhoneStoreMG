// carStore.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarStoreService {
  private carSubject = new BehaviorSubject<any[]>([]);
  car$ = this.carSubject.asObservable();
  private cantidadProductosSubject = new BehaviorSubject<number>(0);
  cantidadProductos$ = this.cantidadProductosSubject.asObservable();

  // con este bloque de codigo cada vez que selecciono un producto se ve la notificacion en en el carrito del navbar 
  // y cuando se accede al carrito se puede aumentar la cantidad o disminuir y su precio va cambiando 
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

  obtenerPrecioTotal(tipoDescuento: string = 'comun') {
    const carrito = this.carSubject.value;
    const cantidadProductos = carrito.reduce((total, producto) => total + producto.quantity, 0);
    const precioTotal = carrito.reduce((total, producto) => total + producto.price * producto.quantity, 0);
  
    // Aplicar descuento del 25% solo si hay 4 o más productos
    const descuento25 = cantidadProductos >= 4 ? precioTotal * 0.25 : 0;
  
    // Sumar descuento del tipo al descuento total
    const descuentoTotal = descuento25 + this.calcularDescuentoTipo(tipoDescuento, cantidadProductos);
  
    // Retornar precio total con descuentos
    return precioTotal - descuentoTotal;
}
calcularDescuentoTipo(tipoDescuento: string, cantidadProductos: number): number {
    switch (tipoDescuento) {
        case 'comun':
            return cantidadProductos >= 10 ? 100 : 0;
        case 'vip':
            return cantidadProductos >= 10 ? 300 : 0;
        case 'especial':
            return cantidadProductos >= 10 ? 50000 : 0;
        default:
            return 0;
    }
}
}


