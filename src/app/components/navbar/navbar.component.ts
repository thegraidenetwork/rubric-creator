import { Component } from '@angular/core';

@Component({
    selector: 'rc-navbar',
    styleUrls: ['./navbar.component.css'],
    templateUrl: './navbar.component.html',
})
export class NavbarComponent {
    public navbarCollapsed: boolean = true;
}
