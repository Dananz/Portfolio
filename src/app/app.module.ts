import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { WellcomeComponent } from './components/wellcome/wellcome.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SlideShowComponent } from './components/slide-show/slide-show.component';
import { DeferLoadDirective } from './directives/deferLoad.directive';
import { VarDirective } from './directives/var.directive';
import { ProjectComponent, ProjectViewComponent, ProjectsListComponent } from './components/project';
import { FooterComponent } from './components/footer/footer.component';


const componentList = [
  AppComponent,
  HomeComponent,
  NavbarComponent,
  WellcomeComponent,
  AboutMeComponent,
  SlideShowComponent,
  DeferLoadDirective,
  VarDirective,
  ProjectComponent,
  ProjectViewComponent,
  ProjectsListComponent,
  SlideShowComponent,
  FooterComponent,
]
const modulesList = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule
]

@NgModule({
  declarations: [...componentList],
  imports: [...modulesList],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
