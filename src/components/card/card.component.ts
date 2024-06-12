import { Component, OnInit} from '@angular/core';
import { ICelular, listPhones } from 'src/app/models/phone.model';
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
  listPhones: ICelular[] = listPhones;
  store: Store[] = [];
  selectedCellphone: Store | null = null;

  //* clase para los celulares agregados en el form
  phones: Phone[] = [];

  constructor(
    public storeService: StoreService,
    public phonesService: PhonesService,
  ) {}

  ngOnInit() {
    this.getAllStore();
    this.getAllPhones();
  }

  

  getAllStore() {
    this.storeService.getAllStores().subscribe(
      (res: Store[]) => {
        this.store = res;
        if (this.store.length > 0) {
          this.selectedCellphone = this.store[1]; // Selecciona el primer celular del array
        }
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
}
