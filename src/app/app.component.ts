import { Component } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { Angulartics2Intercom } from 'angulartics2/intercom';

@Component({
    selector: 'rc-root',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
})
export class AppComponent {
    constructor(
        private angulartics2GoogleTagManager: Angulartics2GoogleAnalytics,
        private angulartics2Intercom: Angulartics2Intercom
    ) {}
}
