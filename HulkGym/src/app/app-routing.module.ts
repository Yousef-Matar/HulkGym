import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { CopyrightsComponent } from './Pages/copyrights/copyrights.component';
import { GalleryComponent } from './Pages/gallery/gallery.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'Gallery', component: GalleryComponent },
  { path: 'AboutUs', component: AboutUsComponent },
  { path: 'ContactUs', component: ContactUsComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'TermsandConditions', component: CopyrightsComponent },
  { path: 'Admin', component: AdminComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
