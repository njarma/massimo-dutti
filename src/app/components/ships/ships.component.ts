import { Component, OnInit } from '@angular/core';
import { ShipsService } from 'src/app/services/ships.service';
import { Observable, concat } from 'rxjs';
import { resources } from '../../configs/api-resources.config';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  $starshipsList: Observable<any>;
  lastResponse: any;
  starships: any[];
  constructor(private shipService: ShipsService) { }

  ngOnInit(): void {
    this.GetStarships();
  }

  GetStarships() {
    const url = (this.lastResponse && this.lastResponse.next)
                  ? this.insertCaracter(this.lastResponse.next, 4, 's')
                  : resources.Starships.url;

    this.shipService.GetStarships(url).subscribe(data => {
      this.starships = data.results;
      this.lastResponse = data;
    });
  }

  private insertCaracter(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
  }

}
