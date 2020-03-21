import { trigger, transition, style, animate } from '@angular/animations';
import { Observable, of, Subscription } from 'rxjs';
import { IProject } from './../../../models/IProject';
import { ProjectsService } from './../../../services/projects.service';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ transform: 'translateX(3000px)' }),
        animate('400ms ease-in', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0)' }),
        animate('500ms ease-out', style({ opacity: 0, transform: 'translateX(3000px)' }))
      ]),
    ])]
})
export class ProjectViewComponent implements OnInit, OnDestroy {

  public currRoute: string
  public projectsSubscriber: Subscription
  public projects: IProject[]
  public project: IProject

  public slideshowVisible = false
  public selectedImage: string

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectsService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(r => this.currRoute = r.name)
    this.projectsSubscriber = this.projectsService.projects$.subscribe(p => this.projects = p)
    this.project = this.getProjectById(this.currRoute)
    if (this.project === null) {
      this.router.navigate([''])
    }
  }
  ngOnDestroy(): void {
    this.projectsSubscriber.unsubscribe()
  }

  getProjectById(id: string): IProject {
    return this.projects.find(p => id === p.id) || null
  }

  selectImage(url) {
    if (!isNullOrUndefined(url)) {
      this.selectedImage = url
      this.slideshowVisible = true
    }
  }
}
