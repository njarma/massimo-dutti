import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() {
  }

  getImage(id: number, url: string) {
    const image = `${url}${id}.jpg`;
    return image;
  }

}
