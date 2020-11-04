import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';



@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  providers : [
    { provide: CarouselConfig, useValue: { noPause: false, showIndicators: true } }
  ]
})
export class AboutMeComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

}
