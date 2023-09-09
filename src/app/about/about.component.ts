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

  ngOnInit(){
    this.responsiveService.isSmallScreen$.subscribe(isSmall => {
      this.isSmallScreen = isSmall;
      console.log(isSmall);
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
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
    
  }
}