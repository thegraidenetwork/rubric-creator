import { Component } from '@angular/core';
import { BaseRubricComponent } from '../base/base-rubric.component';
import { RubricsStateInterface } from '../../store/rubrics.state';
import { Store } from '@ngrx/store';

@Component({
    selector: 'rc-search',
    styleUrls: ['./search.component.css'],
    templateUrl: './search.component.html',
})
export class SearchComponent extends BaseRubricComponent {
    public searchTerm;

    public constructor(protected store: Store<RubricsStateInterface>) {
        super(store);
    }

    public searchRubrics(): void {
        console.log('searchRubrics', this.searchTerm);
    }
}
