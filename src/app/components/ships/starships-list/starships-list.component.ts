import { Component, OnInit } from '@angular/core';
//import { ShipsService } from '../../../services/ships.service';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent implements OnInit {
  constructor() {}
  //constructor(private shipService: ShipsService) { }

  ngOnInit(): void {
/*     this.shipService.GetStarships().subscribe(data => {
      console.log(data);
    }); */
  }

}
