import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { InitialDetailsComponent } from './pages/initial-details/initial-details.component';
import { DetailsProjectComponent } from './pages/details-project/details-project.component';

const routes: Routes = [
    { path: '', component: InitialDetailsComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'projects/:id', component: DetailsProjectComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
