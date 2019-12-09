import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { RubricsStateInterface } from '../../store/rubrics.state';
import { UpdateListFilter } from '../../store/rubrics.actions';

@Component({
    selector: 'rc-search-input',
    templateUrl: './search-input.component.html',
})
export class SearchInputComponent {
    public searchTerm: string = '';

    constructor(private store: Store<RubricsStateInterface>) { }

    public updateSearchTerm(): void {
        this.store.dispatch(new UpdateListFilter(this.searchTerm));
    }
}
