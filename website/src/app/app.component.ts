import { Component, HostListener, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

const areas = 'home, aboutMe, projects, contact'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'website';


ngOnInit() {

}

// Scrolls to section as clicked from header component.
scrollTo(event){
  document.getElementById(event).scrollIntoView({behavior: 'smooth'});
}

      // Listener, tells which section the viewport is in.
      @ViewChildren(areas) sections: QueryList<ElementRef>;

      // dentify which full height div block is currently displayed
      @HostListener('window:scroll', ['$event'])
      onScroll(event) {
        const activeSection = this.sections.toArray().findIndex(section => isElementInViewport(section.nativeElement));

        console.log(areas.split(',')[activeSection]);

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
