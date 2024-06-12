import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from 'src/app/models/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private API_SERVER = "http://localhost:8080/stores";

constructor( private httpClient: HttpClient) { }

public getAllStores():Observable<Store[]>{
  return this.httpClient.get<Store[]>(this.API_SERVER);
}

}
