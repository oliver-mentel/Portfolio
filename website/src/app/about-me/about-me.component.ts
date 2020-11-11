import { Component, OnInit, ElementRef, OnChanges, HostListener } from '@angular/core';
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



  isBiggerThan992px = true;

  constructor() {

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(event.target.innerWidth >= 992){
      this.isBiggerThan992px = true;
      console.log(this.isBiggerThan992px);
    } else {
      this.isBiggerThan992px = false;
    }
    console.log(window.innerWidth)
  }

  ngOnInit(){
    if(window.innerWidth >= 992){
      this.isBiggerThan992px = true;
      console.log(this.isBiggerThan992px);
    } else {
      this.isBiggerThan992px = false;
    }
    console.log(window.innerWidth)
  }



}
