import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { resources } from '../configs/api-resources.config';

@Injectable({
  providedIn: 'root'
})
export class ShipsService extends ApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  public GetStarships(url: string) {
    return this.GetResource<any>(url);
  }

/*   GetStarships(): Observable<any> {
    return this.http.get<any>('https://swapi.dev/api/starships/');
  } */

}
