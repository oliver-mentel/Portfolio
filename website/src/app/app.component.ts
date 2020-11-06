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

scrollTo(event){
  document.getElementById(event).scrollIntoView({behavior: 'smooth'});
}

// scrollTop = 0;
// hideNav = false;

// onScroll(event) {
//   this.hideNav = this.scrollTop < event.target.scrollTop;
//   this.scrollTop = event.target.scrollTop;
// }

      @ViewChildren(areas) sections: QueryList<ElementRef>;

      @HostListener('window:scroll', ['$event'])
      onScroll(event) {
        const activeSection = this.sections.toArray().findIndex(section => isElementInViewport(section.nativeElement));

        console.log(areas.split(',')[activeSection]);

      }
    }
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();

      return (
        rect.bottom >= 1 &&
        rect.right >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
      );


}
