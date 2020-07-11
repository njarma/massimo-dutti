import { Component, OnInit } from '@angular/core';
import { ShipService } from 'src/app/services/ship.service';
import { resources } from '../../configs/api-resources.config';
import { GeneralService } from '../../services/general.service';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  lastResponse: any;
  starships: any[] = [];
  constructor(private shipService: ShipService,
              private generalService: GeneralService,
              private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.GetStarships();
  }

  GetStarships() {
    this.spinnerService.setShowSpinner(true);
    const url = (this.lastResponse && this.lastResponse.next)
                  ? this.generalService.insertCaracter(this.lastResponse.next, 4, 's')
                  : resources.Starships.url;

    this.shipService.GetStarships(url).subscribe(data => {
      this.starships = this.starships.concat(data.results);
      this.lastResponse = data;
      this.spinnerService.setShowSpinner(false);
    });
  }

}
