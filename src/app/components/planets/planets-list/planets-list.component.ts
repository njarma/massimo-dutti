import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { resources } from 'src/app/configs/api-resources.config';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {

  @Input() planetList: any[];
  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }

  getPlanetId(url: string) {
    const id = Number(url.split('/').filter(x => {
                      return x !== '';
                  }).slice(-1)[0]);
    return id;
  }

  getPlanetImage(id: number) {
    const imageUrl = resources.Planets.image.url;
    const image = this.imageService.getImage(id, imageUrl);
    return image;
  }

}
