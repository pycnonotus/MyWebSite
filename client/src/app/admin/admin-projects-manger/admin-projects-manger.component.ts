import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminProjectsMangerCrateComponent } from './admin-projects-manger-crate/admin-projects-manger-crate.component';

@Component({
    selector: 'app-admin-projects-manger',
    templateUrl: './admin-projects-manger.component.html',
    styleUrls: ['./admin-projects-manger.component.css'],
})
export class AdminProjectsMangerComponent implements OnInit {
    constructor() {}
    @ViewChild('create') createComponent: AdminProjectsMangerCrateComponent;
    ngOnInit(): void {}
    openCreateProjectModal() {
        this.createComponent.openCreateProjectModal();
    }
}
