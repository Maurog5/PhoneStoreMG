// navbar.component.ts
import { Component, OnInit, HostListener } from '@angular/core';
import { CarStoreService } from '../service/carStore.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cantidadProductosEnCarrito: number = 0;
  scrolled: boolean = false;
  viewCart: boolean = false;
  isMenuOpen:boolean=false;
  constructor(private carStoreService: CarStoreService) {}

  ngOnInit() {
    // Suscribirse al observable para obtener actualizaciones del contador de productos
    this.carStoreService.cantidadProductos$.subscribe((cantidad) => {
      this.cantidadProductosEnCarrito = cantidad;
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Verificar la posición de scroll y actualizar la variable 'scrolled'
    this.scrolled = window.scrollY > 10; // Cambia 10 por el valor que desees
  }

 
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
