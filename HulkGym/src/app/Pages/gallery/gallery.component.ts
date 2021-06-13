import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GalleryComponent implements OnInit {

  Images = ["../../../assets/Pictures/GymInside.jpg",
    "../../../assets/Pictures/Dumbbells.jpg",
    "../../../assets/Pictures/Motivational.jpg",
    "../../../assets/Pictures/CyclingTrack.jpeg"
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 4000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.animation = false;
    config.showNavigationIndicators = true;
    config.pauseOnFocus = false;
    config.showNavigationArrows = true;
    
  }
  ngOnInit(): void {
  }
}
