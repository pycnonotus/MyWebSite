import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminProjectsMangerComponent } from './admin/admin-projects-manger/admin-projects-manger.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: 'projects', component: AdminProjectsMangerComponent },
        ],
    },
    { path: 'projects', component: ProjectsComponent },
    { path: 'cv', component: CvComponent },
    { path: 'login', component: LoginComponent },
    { path: 'contact', component: ContactComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
