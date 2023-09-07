import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input()
  public photoUrl?: string | null;
  @Input()
  public name?: string;
  @Input()
  public description?: string;
  @Input()
  public videoUrl?: string | null;
}
