import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhonesService {


  private API_SERVER = 'http://localhost:8080/phones';
  constructor(private httpClient: HttpClient) {}

  // asi me traigo la lista de todos los phones creados
  public getAllPhones(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

  public savePhone(phone: any): Observable<any> {
    // Crear una copia del objeto 'phone'
    const phoneCopy = { ...phone };

    // Convertir el nombre del país y del estado a números si es necesario
    if (phoneCopy.pais === 'string') {
      // Si 'pais' es una cadena, convertirla a un número
      phoneCopy.pais = parseInt(phoneCopy.pais);
    }
    if (phoneCopy.estado === 'string') {
      // Si 'estado' es una cadena, convertirla a un número
      phoneCopy.estado = parseInt(phoneCopy.estado);
    }

    // Envia la petición al servidor con la copia modificada
    return this.httpClient.post(this.API_SERVER, phoneCopy);
  }

  public deletePhones(id: number): Observable<any> {
    return this.httpClient.delete(`${this.API_SERVER}/delete/${id}`);
  }

  
}
