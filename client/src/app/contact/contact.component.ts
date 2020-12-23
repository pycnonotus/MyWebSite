import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/contact';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
    baseUrl = environment.apiUrl;
    model: Contact = {
        email: '',
        message: '',
        name: '',
        phoneNumber: '',
    };
    // contactForm = new FormGroup({
    //     name = new FormGroup(''),
    //      = new FormGroup(''),
    //     name = new FormGroup(''),
    //     name = new FormGroup(''),
    // });
    loading = false;
    constructor(private http: HttpClient, private toastr: ToastrService) {}

    ngOnInit(): void {}

    onFormSubmit() {
        const url = this.baseUrl + 'shared/contact';
        this.loading = true;
        this.http.post(url, this.model).subscribe((res) => {
            this.toastr.info('The message has been successfully sent');
            this.model = {
                email: '',
                message: '',
                name: '',
                phoneNumber: '',
            };
            this.loading = false;
        });
    }
}
