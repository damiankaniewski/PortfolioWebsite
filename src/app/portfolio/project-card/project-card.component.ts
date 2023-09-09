import { Component, Input } from '@angular/core';
import { ResponsiveService } from 'src/app/responsiveService/responsive.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  constructor(private responsiveService: ResponsiveService) {};

  isSmallScreen = false;

  ngOnInit(){
    this.responsiveService.isSmallScreen$.subscribe(isSmall => {
      this.isSmallScreen = isSmall;
      console.log(isSmall);
    });
  }

  @Input()
  public photoUrl?: string | null;
  @Input()
  public name?: string;
  @Input()
  public description?: string;
  @Input()
  public videoUrl?: string | null;
}
