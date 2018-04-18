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
import { StoreModule } from '@ngrx/store';
import { rubricsReducer } from './store/rubrics.reducer';
import { ViewRubricComponent } from './containers/view-rubric/view-rubric.component';
import { RubricsEffects } from './store/rubrics.effects';
import { EffectsModule } from '@ngrx/effects';
import { getInitialState } from './store/rubrics.state';

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        NavbarComponent,
        AboutComponent,
        ViewRubricComponent,
    ],
    imports: [
        appRoutes,
        BrowserModule,
        NgbModule.forRoot(),
        RouterModule,
        HttpClientModule,
        StoreModule.forRoot(
            { rubrics: rubricsReducer },
            { initialState: getInitialState }
        ),
        EffectsModule.forRoot([RubricsEffects]),
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
