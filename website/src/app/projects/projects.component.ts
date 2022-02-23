import { Component, HostListener, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [
    {
      provide: CarouselConfig,
      useValue: { noPause: false, showIndicators: true },
    },
  ],
})
export class ProjectsComponent implements OnInit {
  // noWrapSlides = false;
  isBiggerThan992px = true;

  constructor() {}

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth >= 992) {
      this.isBiggerThan992px = true;
    } else {
      this.isBiggerThan992px = false;
    }
  }

  ngOnInit(): void {
    if (window.innerWidth >= 992) {
      this.isBiggerThan992px = true;
    } else {
      this.isBiggerThan992px = false;
    }
  }
}
