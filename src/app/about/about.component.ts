import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  isGameDevelopmentAnimated: boolean = false;
  isSoftwareEngineeringAnimated: boolean = false;
  isWebDevelopmentAnimated: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Sprawdzanie, czy strona jest wyśrodkowana na elementach
    const elements: HTMLElement[] = this.el.nativeElement.querySelectorAll('.game-development, .software-engineering, .web-development');
    const windowHeight = window.innerHeight;

    elements.forEach((element: HTMLElement) => {
      const bounds = element.getBoundingClientRect();
      if (bounds.top < windowHeight / 2 && bounds.bottom > windowHeight / 2) {
        this.renderer.addClass(element, 'animate');
      } else {
        this.renderer.removeClass(element, 'animate');
      }
    });
  }
  
}
