import { Component } from '@angular/core';

import { projects } from 'src/app/data/projects';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
})
export class ProjectsComponent {
    projects = projects;
}
