import { Component, ChangeDetectionStrategy } from '@angular/core';
import { fadeAnimation } from './../../route-animations';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent { }
