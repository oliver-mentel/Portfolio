import {
  Component,
  HostListener,
  ViewChildren,
  QueryList,
  ElementRef,
  OnInit,
} from '@angular/core';
import packageJson from '../../package.json';

const areas = 'home, aboutMe, projects, contact';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private angularVersion: string = packageJson.dependencies['@angular/core'];
  isScrollDown: boolean = false;
  oldScroll: number;
  scrollY: number;
  oldValue: number = 0;

  ngOnInit(): void {
    console.log("This Website is currently using Angular Version: ", this.angularVersion)
  }

  // Scrolls to section as clicked from header component.
  scrollTo(event: string) {
    document.getElementById(event)?.scrollIntoView({ behavior: 'smooth' });
  }

  // Listener, tells which section the viewport is in.
  @ViewChildren(areas) sections: QueryList<ElementRef>;

  // identifies which full height div block is currently displayed
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.sections
      .toArray()
      .findIndex((section) => this.checkElementInViewport(section.nativeElement));
    console.log(this.sections
      .toArray()
      .findIndex((section) => this.checkElementInViewport(section.nativeElement)))
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let newValue: number = window.pageYOffset;

    //Subtract the two and conclude
    if (this.oldValue - newValue > 0) {
      this.isScrollDown = false;
    } else if (this.oldValue - newValue < 0) {
      this.isScrollDown = true;
    }

    // Update the old value
    this.oldValue = newValue;
  }

  checkElementInViewport(element): void {
    // Creates a rectangle on the viewport to distinguish which section is active.
    const isElementInViewport = (el) => {
      el = element
      let rect = el.getBoundingClientRect();
      console.log("Works")

      // check if specific section is inside viewport by using helper
      return (
        rect.bottom >= 1 &&
        rect.right >= 0 &&
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  }
}
