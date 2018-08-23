import { Component, OnInit } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { Angulartics2Intercom } from 'angulartics2/intercom';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'rc-root',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
    constructor(
        private angulartics2GoogleTagManager: Angulartics2GoogleAnalytics,
        private angulartics2Intercom: Angulartics2Intercom,
        private router: Router
    ) {}

    public ngOnInit(): void {
        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe(() => void window.scrollTo(0, 0));
    }
}
