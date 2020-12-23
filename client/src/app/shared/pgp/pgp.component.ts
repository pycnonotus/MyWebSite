import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pgp',
    templateUrl: './pgp.component.html',
    styleUrls: ['./pgp.component.css'],
})
export class PgpComponent implements OnInit {
    constructor() {}
    showPgpKey = false;
    ngOnInit(): void {}
}
