import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ProjectsService } from '../projects/projects.service';
import { ResponsiveService } from '../responsiveService/responsive.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private portfolioService: ProjectsService, private responsiveService: ResponsiveService) { }

  projects: any[] = [];
  currentIndex = 0;

  isCardLoaded: boolean = true;
  isSmallScreen = false;

  ngOnInit(): void {
    this.responsiveService.isSmallScreen$.subscribe(isSmall => {
      this.isSmallScreen = isSmall;
      console.log(isSmall);
    });

    this.portfolioService.getProjectsOffline().subscribe(data => {
      this.projects = data;
    });
  }

  get currentProject(){
    return this.projects[this.currentIndex];
  }
  
  get leftProject(){
    return this.projects[(this.currentIndex - 1 + this.projects.length) % this.projects.length];
  }

  get rightProject(){
    return this.projects[(this.currentIndex + 1) % this.projects.length];
  }

  prevProject() {
    this.isCardLoaded = false;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
      this.isCardLoaded = true;
    },200);
    const leftButton = document.querySelector('.left-button');

    if (leftButton) {
      leftButton.classList.add('clicked');
      setTimeout(() => {
        leftButton.classList.remove('clicked');
      }, 100);
    }

  }

  nextProject() {
    this.isCardLoaded = false;
    setTimeout(() => {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    this.isCardLoaded = true;
  },200);
    const rightButton = document.querySelector('.right-button');
  
    if (rightButton) {
      rightButton.classList.add('clicked');
      setTimeout(() => {
        rightButton.classList.remove('clicked');
      }, 100);
    }
  }

}