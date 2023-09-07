import { Component, ElementRef, EventEmitter, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  inputValue: string = 'What are my skills?';
  showText: boolean = true;
  animating: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  onInputChange(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;

    if (newValue !== 'What are my skills?' && !this.animating) { 
      this.animating = true;

      setTimeout(() => {
        this.showText = false;

        setTimeout(() => {
          this.inputValue = 'What are my skills?';
          const inputElement = this.elementRef.nativeElement.querySelector('.title');
          this.renderer.setProperty(inputElement, 'value', this.inputValue);

          this.showText = true;

          this.animating = false; 
          inputElement.blur();
        }, 2000);

      }, 3000);
    }
  }
}
