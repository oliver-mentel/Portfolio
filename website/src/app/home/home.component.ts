import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isBiggerThan992px = true;

  constructor() {}

  ngOnInit(): void {
    if (window.innerWidth >= 992) {
      this.isBiggerThan992px = true;
    } else {
      this.isBiggerThan992px = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth >= 992) {
      this.isBiggerThan992px = true;
    } else {
      this.isBiggerThan992px = false;
    }
  }
}
