import { Component, OnInit } from '@angular/core';
import { RedirectSpy } from 'src/app/models/redirectSpy';
import { SpyService } from 'src/app/services/spy.service';

@Component({
    selector: 'app-admin-cv-spy',
    templateUrl: './admin-cv-spy.component.html',
    styleUrls: ['./admin-cv-spy.component.css'],
})
export class AdminCvSpyComponent implements OnInit {
    constructor(private spyService: SpyService) {}

    data: RedirectSpy[] = [];
    isCollapsed = true;
    showWebsiteRedirect = false;
    ngOnInit(): void {
        this.spyService.getCvInfo().subscribe((res) => {
            this.data = res;
        });
    }

    getRedirectToWebSite() {
        return this.data.filter((x) => x.alias === '7oug');
    }
}
