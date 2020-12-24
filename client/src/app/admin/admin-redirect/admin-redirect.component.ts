import { Component, OnInit } from '@angular/core';
import { RedirectSpy } from 'src/app/models/redirectSpy';
import { SpyService } from 'src/app/services/spy.service';

@Component({
    selector: 'app-admin-redirect',
    templateUrl: './admin-redirect.component.html',
    styleUrls: ['./admin-redirect.component.css'],
})
export class AdminRedirectComponent implements OnInit {
    constructor(private spyService: SpyService) {}

    data: RedirectSpy[] = [];
    isCollapsed = true;
    showWebsiteRedirect = false;
    ngOnInit(): void {
        this.spyService.getCvInfo().subscribe((res) => {
            this.data = res;
        });
    }


}
