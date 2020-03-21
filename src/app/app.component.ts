import { fadeAnimation } from './route-animations';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'Portfolio';
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}

