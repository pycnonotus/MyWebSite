import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCvSpyComponent } from './admin/admin-cv-spy/admin-cv-spy.component';
import { AdminProjectsMangerComponent } from './admin/admin-projects-manger/admin-projects-manger.component';
import { AdminRedirectComponent } from './admin/admin-redirect/admin-redirect.component';
import { AdminComponent } from './admin/admin.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactComponent } from './contact/contact.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { PgpComponent } from './shared/pgp/pgp.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: 'projects', component: AdminProjectsMangerComponent },
            { path: 'cv', component: AdminCvSpyComponent },
            { path: 'redirect', component: AdminRedirectComponent },
        ],
    },
    { path: 'projects', component: ProjectsComponent },
    { path: 'cv', component: CvComponent },
    { path: 'pgp', component: PgpComponent },
    { path: 'contact', component: ContactPageComponent },
    { path: 'login', component: LoginComponent },
    // { path: 'contact', component: ContactComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
