import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../../models/project';

@Component({
    selector: 'app-modal-projeckt',
    templateUrl: './modal-projeckt.component.html',
    styleUrls: ['./modal-projeckt.component.css'],
})
export class ModalProjecktComponent implements OnInit {
    constructor(public bsModalRef: BsModalRef) {}

    ngOnInit(): void {}
    result: boolean;

    createProject() {}

    confirm(): void {
        this.result = true;
        this.bsModalRef.hide();
    }
    decline(): void {
        this.result = false;
        this.bsModalRef.hide();
    }
}
