import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { AboutComponent } from './containers/about/about.component';
import { ViewRubricComponent } from './containers/view-rubric/view-rubric.component';
import { ListRubricsComponent } from './containers/list-rubrics/list-rubrics.component';

const routes: Routes = [
    {
        path: '',
        component: AboutComponent,
    },
    {
        path: 'rubrics',
        component: ListRubricsComponent,
    },
    {
        path: 'rubrics/create',
        component: AboutComponent,
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
