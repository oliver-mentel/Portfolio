import { Component, EventEmitter, Output, Renderer2 } from '@angular/core';

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

  constructor(private renderer: Renderer2) {}

  scrollingToPosition(idNameOfSection: string) {
    this.clickElement.emit(idNameOfSection);
  }

  changeStyle($event: { type: string; }) {
    this.blur = $event.type === 'mouseover' ? 'add-blur' : '';
  }

  closeBurger() {
    this.toggleClass('hamburger', 'is-active', false);
    this.active = false;
  }

  closeOnLeave() {
    this.toggleClass('navbarNav', 'show', false);
    this.toggleClass('hamburger', 'is-active', false);
    this.active = false;
  }

  handleClick(event: Event, position: string): void {
    this.scrollingToPosition(position);
    this.changeStyle(event);
    this.closeBurger();
  }

  private toggleClass(elementId: string, className: string, add: boolean) {
    const element = document.getElementById(elementId);
    if (element) {
      if (add) {
        this.renderer.addClass(element, className);
      } else {
        this.renderer.removeClass(element, className);
      }
    }
  }
}
