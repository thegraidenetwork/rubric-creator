import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {
        path: '',
        component: AboutComponent,
    },
    {
        path: 'rubrics',
        component: AboutComponent,
    },
    {
        path: 'rubrics/create',
        component: AboutComponent,
    },
    {
        path: 'rubrics/:id',
        component: AboutComponent,
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
