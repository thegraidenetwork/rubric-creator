import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { HomeComponent } from './containers/home/home.component';
import { ViewRubricComponent } from './containers/view-rubric/view-rubric.component';
import { ListRubricsComponent } from './containers/list-rubrics/list-rubrics.component';
import { EditRubricComponent } from './containers/edit-rubric/edit-rubric.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'rubrics',
        component: ListRubricsComponent,
    },
    {
        path: 'rubrics/create',
        component: EditRubricComponent,
    },
    {
        path: 'rubrics/:rubric_uuid/duplicate',
        component: EditRubricComponent,
    },
    {
        path: 'rubrics/:rubric_uuid',
        component: ViewRubricComponent,
    },
    {
        path: '404',
        component: PageNotFoundComponent,
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    },
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
