import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { appRoutes } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './containers/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { JsonbinHttpService } from './data-services/clients/jsonbin-http.service';
import { StoreModule } from '@ngrx/store';
import { rubricsReducer } from './store/rubrics.reducer';
import { ViewRubricComponent } from './containers/view-rubric/view-rubric.component';
import { RubricsEffects } from './store/rubrics.effects';
import { EffectsModule } from '@ngrx/effects';
import { getInitialState } from './store/rubrics.state';
import { LocalStorageModule } from '@ngx-pwa/local-storage';
import { ListRubricsComponent } from './containers/list-rubrics/list-rubrics.component';
import { LocalStorageService } from './data-services/clients/local-storage.service';
import { PageAlertComponent } from './components/page-alert/page-alert.component';
import { BackendDataService } from './data-services/backend-data.service';
import { Nl2brPipe } from './pipes/nl2br.pipe';
import { RubricHeaderComponent } from './components/rubric-header/rubric-header.component';
import { RubricTableHeadComponent } from './components/rubric-table-head/rubric-table-head.component';
import { RubricTableBodyComponent } from './components/rubric-table-body/rubric-table-body.component';
import { RubricListItemComponent } from './components/rubric-list-item/rubric-list-item.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RubricDefinitionQuoteComponent } from './components/rubric-definition-quote/rubric-definition-quote.component';
import { CreateRubricComponent } from './containers/create-rubric/create-rubric.component';
import { EditRubricHeaderComponent } from './components/edit-rubric-header/edit-rubric-header.component';
import { EditRubricTableBodyComponent } from './components/edit-rubric-table-body/edit-rubric-table-body.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    bootstrap: [
        AppComponent,
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        NavbarComponent,
        HomeComponent,
        ViewRubricComponent,
        ListRubricsComponent,
        PageAlertComponent,
        Nl2brPipe,
        RubricHeaderComponent,
        RubricTableHeadComponent,
        RubricTableBodyComponent,
        RubricListItemComponent,
        BreadcrumbComponent,
        RubricDefinitionQuoteComponent,
        CreateRubricComponent,
        EditRubricHeaderComponent,
        EditRubricTableBodyComponent,
    ],
    imports: [
        appRoutes,
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule,
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
        BackendDataService,
    ],
})
export class AppModule {
}
