import { Component } from '@angular/core';
import { ResponsiveService } from '../responsiveService/responsive.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private responsiveService: ResponsiveService) {};

  isSmallScreen = false;

  ngOnInit(){
    this.responsiveService.isSmallScreen$.subscribe(isSmall => {
      this.isSmallScreen = isSmall;
      console.log(isSmall);
    });
  }
}
