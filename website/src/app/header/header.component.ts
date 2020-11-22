import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() click: EventEmitter<any> = new EventEmitter();
  active = false;
  blur: string = '';

  constructor() {}

  ngOnInit(): void {}

  scrollingToPosition(idNameOfSection) {
    this.click.emit(idNameOfSection);
  }

  changeStyle($event) {
    this.blur = $event.type == 'mouseover' ? 'add-blur' : '';
  }
}
