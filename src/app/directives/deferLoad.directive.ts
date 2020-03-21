import { ElementRef, EventEmitter, Output, Directive, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[deferLoad]'
})
export class DeferLoadDirective implements AfterViewInit {
  @Output() public deferLoad: EventEmitter<any> = new EventEmitter();

  private intersectionObserver?: IntersectionObserver;

  constructor(
    private el: ElementRef
  ) { }

  public ngAfterViewInit() {
    this.intersectionObserver = new IntersectionObserver(entries => {
      this.checkForIntersection(entries);
    }, { threshold: .4 });
    this.intersectionObserver.observe(<Element>(this.el.nativeElement));
  }

  private checkForIntersection = (entries: Array<IntersectionObserverEntry>) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (this.checkIfIntersecting(entry)) {
        this.intersectionObserver.unobserve(<Element>(this.el.nativeElement));
        this.intersectionObserver.disconnect();
        this.deferLoad.emit();
      }
    });
  }

  private checkIfIntersecting(entry: IntersectionObserverEntry) {
    return (<any>entry).isIntersecting && entry.target === this.el.nativeElement;
  }
}