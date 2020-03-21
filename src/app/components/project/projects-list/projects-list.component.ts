import { IProject } from './../../../models/IProject';
import { ProjectsService } from './../../../services/projects.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  projectsSubscriber: Subscription
  projects: IProject[]
  constructor(
    private projectsService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.projectsSubscriber = this.projectsService.projects$.subscribe(p => this.projects = p)
  }

}
