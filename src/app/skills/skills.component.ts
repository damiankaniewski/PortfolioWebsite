import { Component } from '@angular/core';
import { ResponsiveService } from '../responsiveService/responsive.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  constructor(private responsiveService: ResponsiveService) {}

  isSmallScreen = false;

  imagePath: string = 'assets/images/me.jpg';
  ngOnInit(){
    this.responsiveService.isSmallScreen$.subscribe(isSmall => {
      this.isSmallScreen = isSmall;
      console.log(isSmall);
    });
  }

  onSkillHover(skill: string): void {
    const imageElement = document.getElementById('image-container');
    if (imageElement) {
      imageElement.classList.add('active');
      imageElement.classList.add('invisible');
      setTimeout(() => {
        if (imageElement) {
          switch (skill) {
            case 'Angular':
              this.imagePath = 'assets/skills/AngularSkills.jpg';
              break;
            case 'HTML':
              this.imagePath = 'assets/skills/htmlSkills.jpg';
              break;
            case 'Firebase':
              this.imagePath = 'assets/skills/firebaseSkills.jpg';
              break;
            case 'C#':
              this.imagePath = 'assets/skills/Csharpskills.jpg';
              break;
            case 'Blender':
              this.imagePath = 'assets/skills/blenderSkills.jpg';
              break;
            case 'Ableton':
                this.imagePath = 'assets/skills/abletonSkills.jpg';
                break;
            default:
              this.imagePath = 'assets/images/me.jpg';
              break;
          }
        }
        imageElement.classList.remove('invisible');
      }, 200);
    }
  
  }
}
