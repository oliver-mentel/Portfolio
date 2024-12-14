import { Component, OnInit, HostListener } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  providers: [
    {
      provide: CarouselConfig,
      useValue: { noPause: false, showIndicators: true },
    },
  ],
})
export class AboutMeComponent implements OnInit {
  isBiggerThan992px = true;

  constructor() {}

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isBiggerThan992px = event.target.innerWidth >= 992;
  }

  ngOnInit() {
    this.isBiggerThan992px = window.innerWidth >= 992;
  }
}
