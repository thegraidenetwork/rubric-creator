import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        component: AppComponent,
    },
    {
        path: 'rubrics',
        component: AppComponent,
    },
    {
        path: 'rubrics/create',
        component: AppComponent,
    },
    {
        path: 'rubrics/:id',
        component: AppComponent,
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
