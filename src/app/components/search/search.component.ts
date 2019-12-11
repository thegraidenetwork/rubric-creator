import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'rc-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
    public searchTerm: string = '';

    constructor() { }

    public ngOnInit() {
    }

    public dispatchSearchTerm(): void {
        console.log(this.searchTerm);
    }

}
