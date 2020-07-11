import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SpinnerService {

  showSpinner = false;

  constructor() { }

  setShowSpinner(flag: boolean) {
    this.showSpinner = flag;
  }

}
