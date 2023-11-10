import { Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild } from '@angular/core';
import { ResponsiveService } from '../responsiveService/responsive.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  constructor(private responsiveService: ResponsiveService) {}

  showProgrammingText: boolean = false;
  showDesignText: boolean = false;
  showMusicText: boolean = false;

  isSmallScreen = false;

  ngOnInit(){
    this.responsiveService.isSmallScreen$.subscribe(isSmall => {
      this.isSmallScreen = isSmall;
      console.log(isSmall);
    });
  }

  showText(section: string) {
    let swap: Element | null;
    if (section === 'programming') {
      swap = document.querySelector(".programming-swap");
      if(swap){
        swap.classList.add("swap-active");
      }
      setTimeout(() => {
        if(swap){
          swap.classList.remove("swap-active");
        }
      },500)
      setTimeout(() => {
        this.showProgrammingText = true;
      }, 500)
    }
    if (section === 'design') {
      swap = document.querySelector(".design-swap");
      if(swap){
        swap.classList.add("swap-active");
      }
      setTimeout(() => {
        if(swap){
          swap.classList.remove("swap-active");
        }
      },500)
      setTimeout(() => {
        this.showDesignText = true;
      }, 500)
    }
    if (section === 'music') {
      swap = document.querySelector(".music-swap");
      if(swap){
        swap.classList.add("swap-active");
      }
      setTimeout(() => {
        if(swap){
          swap.classList.remove("swap-active");
        }
      },500)
      setTimeout(() => {
        this.showMusicText = true;
      }, 500)
    }
  }

  hideText(section: string) {
    let swap: Element | null;
    if (section === 'programming') {
      swap = document.querySelector(".programming-swap");
      if(swap){
        swap.classList.add("swap-active");
      }
      setTimeout(() => {
        if(swap){
          swap.classList.remove("swap-active");
        }
      },500)
      setTimeout(() => {
        this.showProgrammingText = false;
      }, 500)
    }
    if (section === 'design') {
      swap = document.querySelector(".design-swap");
      if(swap){
        swap.classList.add("swap-active");
      }
      setTimeout(() => {
        if(swap){
          swap.classList.remove("swap-active");
        }
      },500)
      setTimeout(() => {
        this.showDesignText = false;
      }, 500)
    }
    if (section === 'music') {
      swap = document.querySelector(".music-swap");
      if(swap){
        swap.classList.add("swap-active");
      }
      setTimeout(() => {
        if(swap){
          swap.classList.remove("swap-active");
        }
      },500)
      setTimeout(() => {
        this.showMusicText = false;
      }, 500)
  }
}
}
