import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../models/project';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    baseUrl = environment.apiUrl;
    private currentProjectSource = new ReplaySubject<Project[]>(1);
    projects$ = this.currentProjectSource.asObservable();

    constructor(private http: HttpClient) {}

    getProjects() {
        this.http.get(this.baseUrl + 'project').subscribe((res: Project[]) => {
            this.currentProjectSource.next(res);
        });
    }
}
