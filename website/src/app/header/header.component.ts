import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() click: EventEmitter<any> = new EventEmitter();
  active = false;
  blur: string = '';
  collapse: string = '';
  closeNav = false;

  constructor() {}

  ngOnInit(): void {}

  scrollingToPosition(idNameOfSection) {
    this.click.emit(idNameOfSection);
  }

  changeStyle($event) {
    this.blur = $event.type == 'mouseover' ? 'add-blur' : '';
  }

  closeBurger($event) {
    var element = document.getElementById('hamburger');
    element.classList.remove('is-active');
    this.active = false;
  }

  closeOnLeave($event) {
    var element = document.getElementById('navbarNav');
    element.classList.remove('show');
    var element = document.getElementById('hamburger');
    element.classList.remove('is-active');
    this.active = false;
  }

}
