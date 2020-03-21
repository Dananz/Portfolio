import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  @ViewChild("aboutMe", { read: ElementRef }) elAboutMe: ElementRef;
  @ViewChild("projects", { read: ElementRef }) elProject: ElementRef;

  scrollToAbout() {
    this.elAboutMe.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  scrollToProjects() {
    this.elProject.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }

}
