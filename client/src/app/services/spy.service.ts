import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RedirectSpy } from '../models/redirectSpy';

@Injectable({
    providedIn: 'root',
})
export class SpyService {
    baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}

    getCvInfo() {
        const url = this.baseUrl + 'spyinfo/cv';
        return this.http.get<RedirectSpy[]>(url);
    }
}
