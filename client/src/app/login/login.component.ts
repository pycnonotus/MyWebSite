import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    constructor(
        public accountService: AccountService,
        private router: Router
    ) {}
    model =  { username: '', password: '' };

    ngOnInit(): void {}

    login() {
        this.accountService
            .login(this.model.username, this.model.password)
            .subscribe(() => {
                this.router.navigateByUrl('/admin');
            });
    }
}
