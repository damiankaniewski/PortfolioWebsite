import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ResponsiveService } from '../responsiveService/responsive.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private renderer: Renderer2, private el: ElementRef, private responsiveService: ResponsiveService) {}
  isSmallScreen = false;
  scrolledPercentage = 0;

  ngOnInit(){
    this.responsiveService.isSmallScreen$.subscribe(isSmall => {
      this.isSmallScreen = isSmall;
      console.log(isSmall);
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    if(!this.isSmallScreen){
      const scrollY = window.scrollY || window.pageYOffset;
      const movingImageContainer = this.el.nativeElement.querySelector('.moving-image-container');
  
      if (scrollY > 0) {
        const grayscaleValue = Math.min((scrollY / 2500) * 100, 100);
  
        movingImageContainer.style.transform = `translateY(${scrollY / 2.5}px)`;
        movingImageContainer.style.filter = `grayscale(${grayscaleValue}%)`;
        console.log(`${movingImageContainer.style.filter}`);
      } else {
        movingImageContainer.style.transform = '';
        movingImageContainer.style.filter = 'grayscale(0)';
      }
    } else {
      const aboutSection = document.querySelector('#about');

      if (aboutSection) {
        const backgroundContainer = document.querySelector('.small-about-section') as HTMLElement;

        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        this.scrolledPercentage = (scrollY / (documentHeight - windowHeight)) * 100; 

        backgroundContainer.style.backgroundPositionX = `${-300-20*this.scrolledPercentage}px`;
      }
    }

    
  }
}