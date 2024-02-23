// card-detail.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ICelular } from 'src/app/models/phone.model';
import { CarStoreService } from '../service/carStore.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent {
  celular: any;

  constructor(private carStoreService: CarStoreService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<CardDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.celular = data;
  }

  esProductoEnCarrito(producto: any): boolean {
    const carrito = this.carStoreService.obtenerCarrito();
    return carrito.some((item) => item.id === producto.id);
  }


  agregarAlCarrito(producto: any) {
    if (!this.esProductoEnCarrito(producto)) {
      this.carStoreService.agregarAlCarrito(producto);

      // Muestra la notificación usando MatSnackBar
      this.snackBar.open('Producto agregado al carrito', 'Cerrar', {
        duration: 2000, 
      });
    } else {
      // Manejar el caso cuando el producto ya está en el carrito
      this.snackBar.open('El producto ya está en el carrito', 'Cerrar', {
        duration: 2000, 
      });
    }
  }
  close() {
    debugger
    this.dialogRef.close();
  }
}
