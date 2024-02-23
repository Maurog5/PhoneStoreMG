import { Component } from '@angular/core';
import { ICelular, listPhones } from 'src/app/models/phone.model';
import { CarStoreService } from '../service/carStore.service';
import { MatDialog } from '@angular/material/dialog';
import { CardDetailComponent } from 'src/components/card-detail/card-detail.component';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  listPhones: ICelular[] = listPhones;

  constructor(private carStoreService: CarStoreService,
    private dialog: MatDialog) {}



  openCardDetail(celular: any) {
    // Abre el modal de detalle y pasa los datos del celular
    const dialogRef = this.dialog.open(CardDetailComponent, {
      data: celular,
      width: '400px',
      height:'400px'
    });
  }

 
}
