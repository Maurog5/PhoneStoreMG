import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { StoreService } from '../service/store/store.service';
import { Store } from 'src/app/models/store';
import { Phone } from 'src/app/models/phone';
import { PhonesService } from '../service/phonesCreated/phones.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  store: Store[] = [];
  phones: Phone[] = [];
  isImageVisible: boolean = false;

  //* carrousel
  visiblePhones: Store[] = [];
  currentIndex: number = 0;
  itemsPerPage: number = 3;

  constructor(
    public storeService: StoreService,
    public phonesService: PhonesService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.getAllStore();
    this.getAllPhones();
  }

  getAllStore() {
    this.storeService.getAllStores().subscribe(
      (res: Store[]) => {
        this.store = res;

        console.log('en el store', this.store);
      },
      (error) => {
        console.error('Error fetching stores', error);
      }
    );
  }

  getAllPhones() {
    this.phonesService.getAllPhones().subscribe(
      (response) => {
        this.phones = response;
        console.log('Celular agregados correctamente:', response);
      },
      (error) => {
        console.error('Error al agregar los phones:', error);
      }
    );
  }

  @HostListener('window:scroll', ['$event']) //* escucha eventos del DOM
  onWindowScroll() {
    const sectionImgDetails = this.el.nativeElement.querySelector(
      '.section-img-details'
    ); //*Selección del Elemento
    const position = sectionImgDetails.getBoundingClientRect().top; //*Obtener la Posición del Elemento
    const windowHeight = window.innerHeight; //* Obtener la Altura de la Ventana
    if (position < windowHeight - 100) {
      //*Verificar la Posición del Elemento

      this.isImageVisible = true;
      this.renderer.addClass(
        this.el.nativeElement.querySelector('.img-iphone12'),
        'visible'
      ); //* Mostrar la Imagen
    } else {
      //* Ocultar la Imagen (Else)

      this.isImageVisible = false;
      this.renderer.removeClass(
        this.el.nativeElement.querySelector('.img-iphone12'),
        'visible'
      );
    }
  }
}
