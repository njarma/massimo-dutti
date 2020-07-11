import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PlanetService extends ApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  public GetPlanets(url: string) {
    return this.GetResource<any>(url);
  }

}
