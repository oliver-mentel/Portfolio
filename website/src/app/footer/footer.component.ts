import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  year: number;

  constructor() {}

  ngOnInit(): void {
    this.displayCurrentYear();
  }

  displayCurrentYear() {
    let date: Date = new Date();
    let now: number = date.getFullYear();

    this.year = now;
  }
}
