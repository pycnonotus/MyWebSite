import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent implements OnInit {
    constructor() {}

    @Input() project: Project;

    ngOnInit(): void {}
}
