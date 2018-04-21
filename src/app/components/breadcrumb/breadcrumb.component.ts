import { Component, OnInit } from '@angular/core';
import { BreadcrumbInterface } from '../../object-interfaces/breadcrumb.interface';
import { select, Store } from '@ngrx/store';
import { RubricsStateInterface } from '../../store/rubrics.state';
import { BaseComponent } from '../base/base.component';
import { Router } from '@angular/router';

@Component({
    selector: 'rc-breadcrumb',
    styleUrls: ['./breadcrumb.component.css'],
    templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent extends BaseComponent implements OnInit {
    public breadcrumbs: Array<BreadcrumbInterface> | undefined;

    constructor(
        private store: Store<RubricsStateInterface>,
        private router: Router
    ) {
        super();
    }

    public ngOnInit(): void {
        this.store.takeUntil(this.ngUnsubscribe)
            .pipe(select('rubrics'))
            .subscribe((state: RubricsStateInterface) => this.breadcrumbs = state.breadcrumbs);

        this.router.events.subscribe(() => this.breadcrumbs = undefined);
    }
}
