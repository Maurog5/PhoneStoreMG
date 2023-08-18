import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../components/service/paises.service'; // Importa el servicio correcto
import { FavoritesService } from '../../components/service/favorites-service/favorites-service.component'; // Importa el nuevo servicio
import { IPais } from '../../app/models/pais.model';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchText1: string = '';
  searchText2: string = '';
  searchResults: IPais[] = [];

  constructor(private paisesService: PaisesService, private favoritesService: FavoritesService) {} // Inyecta ambos servicios

  ngOnInit() {}

  onSearch() {
    this.paisesService.getPaises().subscribe((data: IPais[]) => { // Usa el servicio paisesService
      this.searchResults = data.filter(pais =>
        pais.name.common.toLowerCase().includes(this.searchText1.toLowerCase()) 
      );

      if (this.searchResults.length === 0) {
        window.alert('No se encontró ningún país con ese nombre.');
      }
    });
  }

  removeSearchResult(result: IPais) {
    const index = this.searchResults.indexOf(result);
    if (index !== -1) {
      this.searchResults.splice(index, 1);
    }
  }

  toggleFavorite(pais: IPais) {
    pais.favorite = !pais.favorite;
    this.favoritesService.toggleFavorite(pais);
    if (pais.favorite) {
      window.alert(`¡${pais.name.common} se ha añadido a tus favoritos!`);
    } else {
      window.alert(`¡${pais.name.common} ya no está en tus favoritos!`);
    }
  }
}
