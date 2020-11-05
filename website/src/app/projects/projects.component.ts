import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers : [
    { provide: CarouselConfig, useValue: { noPause: false, showIndicators: true } }
  ]
})
export class ProjectsComponent implements OnInit {
  noWrapSlides = false;

  constructor() { }

  ngOnInit(): void {

  }

}
