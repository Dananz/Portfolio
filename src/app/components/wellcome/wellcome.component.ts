import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WellcomeComponent {

  @Output() goToAbout = new EventEmitter()

  about(ev) {
    ev.preventDefault();
    this.goToAbout.emit()
  }

}
