import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isBiggerThan992px = true;
  show: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.updateView(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.updateView(event.target.innerWidth);
  }

  private updateView(width: number): void {
    if (width >= 992) {
      this.isBiggerThan992px = true;
      this.show = false;
    } else {
      this.isBiggerThan992px = false;
    }
  }
}