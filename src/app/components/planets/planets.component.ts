import { Component, OnInit } from '@angular/core';
import { resources } from '../../configs/api-resources.config';
import { GeneralService } from '../../services/general.service';
import { PlanetService } from '../../services/planet.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  lastResponse: any;
  planets: any[];
  constructor(private planetService: PlanetService,
              private generalService: GeneralService) { }

  ngOnInit(): void {
    this.GetStarships();
  }

  GetStarships() {
    const url = (this.lastResponse && this.lastResponse.next)
                  ? this.generalService.insertCaracter(this.lastResponse.next, 4, 's')
                  : resources.Starships.url;

    this.planetService.GetPlanets(url).subscribe(data => {
      this.planets = data.results;
      this.lastResponse = data;
    });
  }

}