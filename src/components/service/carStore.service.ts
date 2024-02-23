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
}
