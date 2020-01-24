import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'rc-root',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    constructor(
        // tslint:disable-next-line:no-unused-variable
        private angulartics2GoogleTagManager: Angulartics2GoogleAnalytics,
        private router: Router
    ) { }

    public ngOnInit(): void {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd))
            .subscribe(() => window.scrollTo(0, 0));
    }
}
