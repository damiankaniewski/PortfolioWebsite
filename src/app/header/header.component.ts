import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ResponsiveService } from '../responsiveService/responsive.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(private renderer: Renderer2, private el: ElementRef, private responsiveService: ResponsiveService) {}

  activeSection: string | null = "home";
  isSmallScreen = false;

  ngOnInit() {
    this.responsiveService.isSmallScreen$.subscribe(isSmall => {
      this.isSmallScreen = isSmall;
      console.log(isSmall);
    });


    setTimeout(() => {
      if(this.isSmallScreen){
        const textElement = document.querySelector('.links');
        if(textElement){
          textElement.classList.add('loaded');
          }
      }else{
        const textElement = document.querySelector('.left-links');
        if(textElement){
          textElement.classList.add('loaded');
          }
      }
      
    }, 0);

    if(!this.isSmallScreen){
      setTimeout(() => {
        const textElement = document.querySelector('.right-links');
        if(textElement){
          textElement.classList.add('loaded');
        }
    }, 500);
    }
    
}

  scrollToSection(sectionId: string): void {
    const target = document.getElementById(sectionId);
    if (target) {
      const yOffset = -100;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      this.animateSection(sectionId); 
    }
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const sections = ['home', 'about', 'skills', 'portfolio', 'contact'];
  
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const bounds = element.getBoundingClientRect();
  
        let offset = 0;
  
        if (section === 'portfolio' && this.activeSection === 'portfolio') {
          offset = bounds.top + window.innerHeight / 2;
        } else {
          offset = bounds.top + window.innerHeight / 2 + 100;
        }
  
        if (
          bounds.top <= offset &&
          bounds.bottom >= window.innerHeight / 2
        ) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  animateSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.classList.add('animate__animated', 'animate__fadeIn');
    }
  }

}
