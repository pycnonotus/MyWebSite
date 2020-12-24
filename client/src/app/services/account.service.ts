import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AccountService {
    baseUrl = environment.apiUrl;
    constructor(private http: HttpClient) {}

    private currentUserSource = new ReplaySubject<User>(1);
    currentUser$ = this.currentUserSource.asObservable();

    login(username: string, password: string) {
        return (
            this.http
                .post(this.baseUrl + 'account/login', {
                    username,
                    password,
                })
                .pipe(
                    map((user: User) => {
                        if (user) {
                            this.setCurrentUser(user);
                        }
                    })
                )
        );
    }

    setCurrentUser(user: User) {
        if (!user) {
            throw new Error('can not set user as null');
        }
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSource.next(user);
    }
    logout() {
        localStorage.removeItem('user');
        this.currentUserSource.next(null);
    }
    getDecodedToken(token: string) {
        return JSON.parse(atob(token.split('.')[1]));
    }
}
