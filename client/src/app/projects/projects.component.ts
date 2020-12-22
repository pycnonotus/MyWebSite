import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
    constructor(private projectService: ProjectService) {}
    projects: Project[] = [];
    projectsCopy: Project[] = [];
    tags: string[] = [];
    filter: string = '';
    tagsCopy: string[] = [];
    async ngOnInit(): Promise<void> {
        console.log('s1');

        const tagSet = new Set<string>();
        this.projectService.getProjects();
        await this.projectService.projects$

            .pipe(take(1))

            .subscribe((projects) => {
                this.projects = [...projects];
                this.projectsCopy = [...projects];
                projects.forEach((project) => {
                    console.log('s');

                    project.tags.forEach((t) => {
                        tagSet.add(t);
                    });
                });
                console.log(tagSet.values());
                console.log([...tagSet.values()]);
                this.tags = [...tagSet];
                this.tagsCopy = [...this.tags];
            });
    }
    onAnyChangeOfFilter(obj) {
        console.log(obj);
        this.tags = this.tagsCopy.filter((ta) => !this.filter.includes(ta));
    }
    onSubmit() {
        if (this.filter.length === 0) {
            this.projects = [...this.projectsCopy];
            console.log('im here empty');
            return;
        }
        const tt = true;
        this.projects = this.projectsCopy.filter((p) => {
            let found = true;

            this.filter.split(',').forEach((tag) => {
                if (!p.tags.includes(tag)) {
                    found = false;
                }
            });
            return found;
        });
    }
}
