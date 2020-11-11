import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { trigger } from '@angular/animations';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Output() click: EventEmitter<any> = new EventEmitter();
active = false;


  constructor() { }

  ngOnInit(): void {
  }

  // toggleIcon(event) {
  // //  event.srcElement.classList.add("is-active");
  // // }


  scrollingToPosition(idNameOfSection){
    this.click.emit(idNameOfSection);
  }

}
