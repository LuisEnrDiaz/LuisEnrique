import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { projects } from 'src/app/data/projects';
import { ProjectsI } from 'src/app/types/projects';

@Component({
    selector: 'app-details-project',
    templateUrl: './details-project.component.html',
})
export class DetailsProjectComponent {
    constructor(private route: ActivatedRoute) {}

    projects = projects;
    project: ProjectsI = {
        id: '',
        img: '',
        framework: 'React',
        code: null,
        web: null,
        description: '',
        technologies: [],
        title: '',
    };

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            const id = params['id'];

            const project = projects.find((i) => i.id === id);

            this.project = project!;
        });
    }
}
