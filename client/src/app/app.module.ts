import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { AdminProjectsMangerComponent } from './admin/admin-projects-manger/admin-projects-manger.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProjecktComponent } from './modals/projeckt/projeckt.component';
import { ModalProjecktComponent } from './modals/modal-projeckt/modal-projeckt.component';
import { AdminProjectsMangerCrateComponent } from './admin/admin-projects-manger/admin-projects-manger-crate/admin-projects-manger-crate.component';
import { ProjectCardComponent } from './projects/project-card/project-card.component';
import { HomeBannerComponent } from './home/home-banner/home-banner.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AdminCvSpyComponent } from './admin/admin-cv-spy/admin-cv-spy.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        FooterComponent,
        HomeComponent,
        CvComponent,
        ProjectsComponent,
        LoginComponent,
        ContactComponent,
        AdminComponent,
        AdminNavComponent,
        AdminProjectsMangerComponent,
        ProjecktComponent,
        ModalProjecktComponent,
        AdminProjectsMangerCrateComponent,
        ProjectCardComponent,
        HomeBannerComponent,
        AdminCvSpyComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ModalModule.forRoot(),
        TypeaheadModule.forRoot(),
        ToastrModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
