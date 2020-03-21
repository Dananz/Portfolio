import { fadeAnimation } from './route-animations';
import { Component, OnInit } from '@angular/core';
declare var Rellax: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  ngOnInit(): void {
    var rellax = new Rellax('.rellax', {
      wrapper: 'app-home',
      center: false
    });
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}

