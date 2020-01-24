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
import { ListRubricsComponent } from './containers/list-rubrics/list-rubrics.component';
import { LocalStorageService } from './data-services/clients/local-storage.service';
import { PageAlertComponent } from './components/page-alert/page-alert.component';
import { BackendDataService } from './data-services/backend-data.service';
import { Nl2brPipe } from './pipes/nl2br.pipe';
import { RubricHeaderComponent } from './components/rubric-header/rubric-header.component';
import { RubricTableHeadComponent } from './components/rubric-table-head/rubric-table-head.component';
import { RubricTableBodyComponent } from './components/rubric-table-body/rubric-table-body.component';
import { RubricListItemComponent } from './components/rubric-list-item/rubric-list-item.component';
import { EditRubricComponent } from './containers/edit-rubric/edit-rubric.component';
import { EditRubricHeaderComponent } from './components/edit-rubric-header/edit-rubric-header.component';
import { EditRubricTableBodyComponent } from './components/edit-rubric-table-body/edit-rubric-table-body.component';
import { FormsModule } from '@angular/forms';
import { EditRubricSaveButtonComponent } from './components/edit-rubric-save-button/edit-rubric-save-button.component';
import { EditRubricTableBottomComponent } from './components/edit-rubric-table-bottom/edit-rubric-table-bottom.component';
import { HomeJumbotronComponent } from './components/home-jumbotron/home-jumbotron.component';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RubricViewMobileComponent } from './components/rubric-view-mobile/rubric-view-mobile.component';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { OfflineComponent } from './components/offline/offline.component';
import { ConnectionService } from './services/connection.service';
import { LoadingComponent } from './components/loading/loading.component';
import { CreateRubricButtonComponent } from './components/create-rubric-button/create-rubric-button.component';
import { WindowRef } from './services/window-ref.service';
import { NavigatorRef } from './services/navigator-ref.service';
import { RubricActionButtonGroupComponent } from './components/rubric-action-button-group/rubric-action-button-group.component';
import { DeleteRubricModalComponent } from './components/delete-rubric-modal/delete-rubric-modal.component';
import { SearchInputComponent } from './components/search-input/search-input.component';

@NgModule({
    bootstrap: [
        AppComponent,
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        NavbarComponent,
        HomeComponent,
        OfflineComponent,
        ViewRubricComponent,
        ListRubricsComponent,
        PageAlertComponent,
        Nl2brPipe,
        RubricHeaderComponent,
        RubricTableHeadComponent,
        RubricTableBodyComponent,
        RubricListItemComponent,
        EditRubricComponent,
        EditRubricHeaderComponent,
        EditRubricTableBodyComponent,
        EditRubricSaveButtonComponent,
        EditRubricTableBottomComponent,
        HomeJumbotronComponent,
        RubricViewMobileComponent,
        LoadingComponent,
        CreateRubricButtonComponent,
        RubricActionButtonGroupComponent,
        DeleteRubricModalComponent,
        SearchInputComponent,
    ],
    entryComponents: [
        DeleteRubricModalComponent,
    ],
    imports: [
        appRoutes,
        BrowserModule,
        NgbModule,
        FormsModule,
        RouterModule,
        HttpClientModule,
        StoreModule.forRoot(
            { rubrics: rubricsReducer },
            { initialState: getInitialState }
        ),
        EffectsModule.forRoot([RubricsEffects]),
        environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : [],
        Angulartics2Module.forRoot([
            Angulartics2GoogleAnalytics,
        ]),
    ],
    providers: [
        JsonbinHttpService,
        LocalStorageService,
        BackendDataService,
        ConnectionService,
        WindowRef,
        NavigatorRef,
    ],
})
export class AppModule {
}
