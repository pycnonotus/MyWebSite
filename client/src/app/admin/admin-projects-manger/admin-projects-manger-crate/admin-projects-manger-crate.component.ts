import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalProjecktComponent } from 'src/app/modals/modal-projeckt/modal-projeckt.component';
@Component({
    selector: 'app-admin-projects-manger-crate',
    templateUrl: './admin-projects-manger-crate.component.html',
    styleUrls: ['./admin-projects-manger-crate.component.css'],
})
export class AdminProjectsMangerCrateComponent implements OnInit {
    bsModalRef: BsModalRef;
    
    constructor(private modalService: BsModalService) {}

    ngOnInit(): void {}

    openCreateProjectModal(): void {
        const config = {
            class: 'modal-dialog-centered',
            initialState: {},
        };
        this.bsModalRef = this.modalService.show(
            ModalProjecktComponent,
            config
        );
    }
}
