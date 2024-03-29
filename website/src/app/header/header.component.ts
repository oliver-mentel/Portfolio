import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() clickElement: EventEmitter<any> = new EventEmitter();
  active: boolean = false;
  blur: string = '';
  closeNav: boolean = false;

  constructor() {}

  // ngOnInit(): void {
  //   // use index 26 for Prod, 22 for local development
  //   // this.scrollingToPosition(window.location.href.slice(22));
  //   // console.log(window.location.href.slice(22));
  // }

  scrollingToPosition(idNameOfSection: string) {
    this.clickElement.emit(idNameOfSection);
  }

  changeStyle($event) {
    this.blur = $event.type == 'mouseover' ? 'add-blur' : '';
  }

  closeBurger() {
    let element = document.getElementById('hamburger');
    element.classList.remove('is-active');
    this.active = false;
  }

  closeOnLeave() {
    let navBarNavElement = document.getElementById('navbarNav');
    navBarNavElement.classList.remove('show');
    let hamburgerElement = document.getElementById('hamburger');
    hamburgerElement.classList.remove('is-active');
    this.active = false;
  }
}
