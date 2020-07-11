import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  imageUrl = (environment.ambientes[environment.ambientes.seleccionado].imageUrlBase);
  constructor() {
  }

  getShipImage(id: number) {
    const image = `${this.imageUrl}${id}.jpg`;
    return image;
  }

}
