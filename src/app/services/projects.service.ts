import { IProject } from './../models/IProject';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects: IProject[] = [
    {
      id: 'getshred',
      description: '',
      name: 'GetShred',
      image_url: [],
      my_parts: [],
      client_techs: [],
      server_techs: [],
      isActive: false
    },
    {
      id: 'seatmap-backoffice',
      description: 'Back office for ELAL support team',
      name: 'Seatmap Backoffice',
      image_url: ['assets/imgs/projects/seatmap/1.png', 'assets/imgs/projects/seatmap/2.png', 'assets/imgs/projects/seatmap/3.png', 'assets/imgs/projects/seatmap/4.png'],
      my_parts: [
        "Built .Net layers model for fetching airplane data using enterprises local micro services.",
        "Built Rest api's like: Get, update, post, delete",
        "Language support: English / Hebrew",
        "Tooltips & Modals are built with Angular CDK tools such as: Overlay, Portal.",
        "Built a dynamically drawn airplane using SCSS pseudo features.",
        "Built a filtering mechanism for filtering each seat's properties.",
        "Seat properties are arriving from Airplane micro service OR properties that added by admin.",
        "Admin Panel: a CMS system that allows admin to add general comments for planes, custom seat properties & comments managment.",
        "Theme selector.",
        "Designed UI for the entire system. almost every component is 100% mine, even icons.",
        "Fully Animated using CSS3 keyframes & Angular Animations.",
      ],
      client_techs: ['Angular', 'SCSS', 'Rxjs', 'Angular Material & CDK', 'NGX-Translate'],
      server_techs: ['.Net (Entity Framework)', 'Rest API', 'IIS'],
      isActive: true
    },
    {
      id: 'backoffice',
      description: 'Back office system, allowing the system managers to add, edit & remove data from system.',
      name: 'Backoffice',
      image_url: ['assets/imgs/projects/backoffice/1.png', 'assets/imgs/projects/backoffice/2.png'],
      my_parts: [
        "Built .Net layers model for fetching data from database.",
        "Built Rest api's like: Get, update, post, delete.",
        "Full validations on form. Each list item must be unique at all fields.",
        "Built a CMS for adding new items to database.",
        "Designed UI & UX flow."
      ],
      client_techs: ['Angular', 'SCSS', 'Rxjs', 'Angular Material'],
      server_techs: ['.Net (Entity Framework)', 'Rest API', 'IIS'],
      isActive: true
    },
    {
      id: 'we-do-stuff',
      description: 'Demo design for product site.',
      name: 'We Do Stuff',
      image_url: ['assets/imgs/projects/wedostuff/1.png'],
      my_parts: [
        "Mobile first designed UI.",
        "Structured a great UX Flow.",
        "Fully Animated using CSS3 keyframes."
      ],
      client_techs: ['SCSS', 'JS', 'HTML'],
      server_techs: [],
      isActive: true
    },
  ]

  private readonly projectsSubject: BehaviorSubject<IProject[]> = new BehaviorSubject<IProject[]>(null)
  public readonly projects$ = this.projectsSubject.asObservable()

  constructor() {
    this.setProjects(this.projects)
  }

  public setProjects(projects: IProject[]) {
    this.projectsSubject.next(projects)
  }
}
