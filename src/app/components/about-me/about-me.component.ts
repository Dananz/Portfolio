import { Component, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(-1000px)' }),
        animate('1000ms', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideFromLeft', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(-2000px)' }),
        animate('1000ms 1340ms cubic-bezier(0.215, 0.61, 0.355, 1)', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('slideFromRight', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(2000px)' }),
        animate('1000ms 767ms cubic-bezier(0.215, 0.61, 0.355, 1)', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('slideFromRight2', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(2000px)' }),
        animate('1000ms 967ms cubic-bezier(0.215, 0.61, 0.355, 1)', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
  ]
})
export class AboutMeComponent {
  @Output() goToProjects = new EventEmitter();

  slideToProjects(ev) {
    ev.preventDefault();
    this.goToProjects.emit()
  }
}
