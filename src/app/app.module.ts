import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialsComponent } from './components/socials/socials.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { HomeComponent } from './pages/home/home.component';
import { InitialDetailsComponent } from './pages/initial-details/initial-details.component';
import { DetailsProjectComponent } from './pages/details-project/details-project.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SocialsComponent,
        ProjectsComponent,
        ResumeComponent,
        HomeComponent,
        InitialDetailsComponent,
        DetailsProjectComponent,
        AboutUsComponent,
    ],
    imports: [AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
