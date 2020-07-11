import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() {
  }

  insertCaracter(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
  }

}
