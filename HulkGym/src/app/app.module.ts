import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './Shared/navigation-bar/navigation-bar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { GalleryComponent } from './Pages/gallery/gallery.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContactsComponent } from './Pages/contact-us/contacts/contacts.component';
import { OpeningHoursComponent } from './Pages/contact-us/opening-hours/opening-hours.component';
import { LocationsComponent } from './Pages/contact-us/locations/locations.component';
import { FAQComponent } from './Pages/contact-us/faq/faq.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { CopyrightsComponent } from './Pages/copyrights/copyrights.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    GalleryComponent,
    LoginComponent,
    RegisterComponent,
    ContactsComponent,
    OpeningHoursComponent,
    LocationsComponent,
    FAQComponent,
    CopyrightsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}