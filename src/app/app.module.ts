import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { appRoutes } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './containers/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { JsonbinHttpService } from './services/http/jsonbin-http.service';

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        NavbarComponent,
        AboutComponent,
    ],
    imports: [
        appRoutes,
        BrowserModule,
        NgbModule.forRoot(),
        RouterModule,
        HttpClientModule,
    ],
    providers: [
        JsonbinHttpService,
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule {
}
