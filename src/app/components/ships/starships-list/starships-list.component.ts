import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../../../services/image.service';
import { resources } from '../../../configs/api-resources.config';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent implements OnInit {

  @Input() starshipList: any[];
  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }

  getShipId(url: string) {
    const id = Number(url.split('/').filter(x => {
                      return x !== '';
                  }).slice(-1)[0]);
    return id;
  }

  getShipImage(id: number) {
    const imageUrl = resources.Starships.image.url;
    const image = this.imageService.getImage(id, imageUrl);
    return image;
  }

}
