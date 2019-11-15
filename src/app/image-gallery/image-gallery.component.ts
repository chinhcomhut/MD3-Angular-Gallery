import { Component, OnInit, Inject, Optional } from '@angular/core';
import { GalleryConfig } from './token';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  listImage = [
    'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/76948310_1384757135025210_5580035095944757248_n.jpg?_nc_cat=102&_nc_oc=AQnPKlLCY0-f5dqc3e3ULhQp8rWgJu4a-qccfUrY0gt9OXsqVJHbAdcIpPjg4tz64l0&_nc_ht=scontent.fhan3-1.fna&oh=87d5a9c77947911844ac9628dffa2b54&oe=5E3FF30C',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=2',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=3',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=4',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=5',

  ];
  itemWidth: number;
  config = 5;
  constructor(
    @Inject(GalleryConfig)
    @Optional()
      config: number
  ) {
    if (config) {
      this.config = config;
    }
  }

  ngOnInit() {
    this.itemWidth = 100 / this.config;
  }
}
