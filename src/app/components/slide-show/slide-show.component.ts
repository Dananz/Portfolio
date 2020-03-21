import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0, transform: "scale(0.5) ", 'transform-origin': " center" }),
        animate('500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)',
          style({ opacity: 1, transform: "scale(1)", 'transform-origin': " center" }))
      ]),
      transition('* => void', [
        animate('400ms cubic-bezier(0.785, 0.135, 0.15, 0.86)',
          style({ opacity: 0, transform: "scale(0.5) ", 'transform-origin': " center" }))
      ])
    ])
  ]
})
export class SlideShowComponent implements OnInit {

  @Input() slides = []
  @Input() currentSlide = 0;
  @Output() setOff = new EventEmitter
  public isSingleSlide = false
  constructor() { }

  ngOnInit(): void {
    this.isSingleSlide = this.slides.length <= 1 ? true : false
  }

  close() {
    this.setOff.emit()
  }

  previous() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }
  next() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

}
