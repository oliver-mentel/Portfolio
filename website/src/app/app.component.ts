import {
  Component,
  HostListener,
  OnInit,
  ViewChildren,
  QueryList,
  ElementRef,
} from '@angular/core';

const areas = 'home, aboutMe, projects, contact';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'website';
  isScrollDown = false;
  oldScroll: number;
  scrollY: number;
  oldValue = 0;

  ngOnInit() {}

  // Scrolls to section as clicked from header component.
  scrollTo(event) {
    document.getElementById(event).scrollIntoView({ behavior: 'smooth' });
  }

  // Listener, tells which section the viewport is in.
  @ViewChildren(areas) sections: QueryList<ElementRef>;

  // identifies which full height div block is currently displayed
  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    const activeSection = this.sections
      .toArray()
      .findIndex((section) => isElementInViewport(section.nativeElement));
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    let newValue = window.pageYOffset;

    //Subtract the two and conclude
    if (this.oldValue - newValue > 0) {
      this.isScrollDown = false;
    } else if (this.oldValue - newValue < 0) {
      this.isScrollDown = true;
    }

    // Update the old value
    this.oldValue = newValue;
  }
}

// Creates a rectangle on the viewport to distinguish which section is active.
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  // check if specific section is inside viewport by using helper
  return (
    rect.bottom >= 1 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
