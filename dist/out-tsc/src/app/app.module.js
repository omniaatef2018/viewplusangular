import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ContactComponent } from './components/contact/contact.component';
import { PartnersComponent } from './components/partners/partners.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PackageComponent } from './components/package/package.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectinfoComponent } from './components/projectinfo/projectinfo.component';
import { ProjectdetailsComponent } from './components/projectdetails/projectdetails.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                HomeComponent,
                ProjectsComponent,
                ServicesComponent,
                GalleryComponent,
                AboutusComponent,
                PricingComponent,
                ContactComponent,
                PartnersComponent,
                LoginComponent,
                RegisterComponent,
                NotfoundComponent,
                PackageComponent,
                ClientsComponent,
                ProfileComponent,
                ProjectinfoComponent,
                ProjectdetailsComponent,
                LayoutComponent,
                FooterComponent,
                ForgetpasswordComponent,
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                BrowserAnimationsModule,
                FormsModule,
                HttpClientModule
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map