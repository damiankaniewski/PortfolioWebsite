import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../responsiveService/responsive.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private responsiveService: ResponsiveService) { }

  isSmallScreen = false;
  shouldFadeIn = false;
  shouldFadeOut = false;

  portfolioItems = [
    {
      title: 'Hello World Game',
      description: '2D platformer game made with Unity',
      image: 'assets/images/HelloWorldGame1.png',
      githubLink: 'https://github.com/damiankaniewski/HelloWorldGame',
      additionalLink: "",
      linkIcon: ""
    },
    {
      title: 'Bajeczne Wypieki',
      description: 'Website of the Bajeczne Wypieki - Cake Studio. Angular with Firebase.',
      image: 'assets/images/bajecznewypieki.png',
      githubLink: 'https://github.com/damiankaniewski/bajecznewypieki',
      additionalLink: "https://bajeczne-wypieki.web.app/",
      linkIcon: "assets/images/bajeczneWypiekiLogo.png"
    },
    {
      title: 'Portfolio Website',
      description: 'My website created with Angular and Firebase',
      image: 'assets/images/PortfolioWebsite.png',
      githubLink: 'https://github.com/damiankaniewski/PortfolioWebsite',
      additionalLink: "https://damiankaniewski.github.io/PortfolioWebsite/",
      linkIcon: "assets/images/me1.jpg"
    },
    {
      title: 'Design Adventures',
      description: 'I also tried my hand at creativity. 3D modeling, UX/UI, Environment Design',
      image: 'assets/images/designportfolio.png',
      githubLink: 'https://github.com/damiankaniewski',
      additionalLink: "",
      linkIcon: ""
    },
  ];

  currentItemIndex = 0;
  currentItem = this.portfolioItems[this.currentItemIndex];

  ngOnInit(): void {
    this.responsiveService.isSmallScreen$.subscribe(isSmall => {
      this.isSmallScreen = isSmall;
    });
  }

  changeItem(direction: 'left' | 'right'): void {
    this.shouldFadeIn = false;
    this.shouldFadeOut = true;

    setTimeout(() => {
      if (direction === 'left') {
        this.currentItemIndex = (this.currentItemIndex === 0) ? this.portfolioItems.length - 1 : this.currentItemIndex - 1;
      } else {
        this.currentItemIndex = (this.currentItemIndex === this.portfolioItems.length - 1) ? 0 : this.currentItemIndex + 1;
      }
      this.currentItem = this.portfolioItems[this.currentItemIndex];
  
      this.currentItem = this.portfolioItems[this.currentItemIndex];
      this.shouldFadeIn = true;
      this.shouldFadeOut = false;
    }, 300);
  }
}