import { Component, HostListener } from '@angular/core';
import { ResponsiveService } from '../responsiveService/responsive.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor(private responsiveService: ResponsiveService) {};

  imageScale = 0;
  isSmallScreen = false;

  ngOnInit() {
    this.responsiveService.isSmallScreen$.subscribe(isSmall => {
      this.isSmallScreen = isSmall;
      console.log(isSmall);
    });

      setTimeout(() => {
        const textElement = document.querySelector('.main-title');
        if(textElement){
          textElement.classList.add('loaded');
        }
      }, 200);
      setTimeout(() => {
        const textElement = document.querySelector('.sub-title');
        if(textElement){
          textElement.classList.add('loaded');
        }
      }, 1000);
      setTimeout(() => {
        const textElement = document.querySelector('.image-container');
        if(textElement){
          textElement.classList.add('loaded');
        }
      }, 1000);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    this.imageScale = Math.min(0.1, Math.abs((scrollY / (documentHeight - windowHeight)) * 100)); 
  }
}
