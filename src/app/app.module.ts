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
import { JsonbinHttpService } from './services/data/jsonbin-http.service';
import { StoreModule } from '@ngrx/store';
import { rubricsReducer } from './store/rubrics.reducer';
import { ViewRubricComponent } from './containers/view-rubric/view-rubric.component';
import { RubricsEffects } from './store/rubrics.effects';
import { EffectsModule } from '@ngrx/effects';
import { getInitialState } from './store/rubrics.state';
import { LocalStorageModule } from '@ngx-pwa/local-storage';
import { ListRubricsComponent } from './containers/list-rubrics/list-rubrics.component';
import { LocalStorageService } from './services/data/local-storage.service';

@NgModule({
    bootstrap: [
        AppComponent,
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        NavbarComponent,
        AboutComponent,
        ViewRubricComponent,
        ListRubricsComponent,
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
        LocalStorageModule,
    ],
    providers: [
        JsonbinHttpService,
        LocalStorageService,
    ],
})
export class AppModule {
}
