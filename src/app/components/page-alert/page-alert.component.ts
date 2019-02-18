import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RubricsStateInterface } from '../../store/rubrics.state';
import { BaseComponent } from '../base/base.component';
import { Router } from '@angular/router';
import { selectError } from '../../store/rubrics.selectors';
import { DisplayableErrorInterface } from '../../object-interfaces/displayable-error.interface';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'rc-page-alert',
    styleUrls: ['./page-alert.component.css'],
    templateUrl: './page-alert.component.html',
})
export class PageAlertComponent extends BaseComponent implements OnInit {
    public showAlert: boolean = false;
    public alertMessage: string | undefined;
    public alertClass: string | undefined;
    private readonly errorClass = 'alert-danger';
    private readonly successClass = 'alert-success';

    constructor(
        private store: Store<RubricsStateInterface>,
        private router: Router
    ) {
        super();
    }

    public ngOnInit(): void {
        this.store
            .pipe(
                takeUntil(this.ngUnsubscribe),
                select(selectError),
                filter(error => error !== undefined)
            )
            .subscribe((error: DisplayableErrorInterface) => {
                this.showError(error.message);
            });

        this.router.events.subscribe(() => this.clearAlert());
    }

    public showError(message: string): void {
        this.showAlert = true;
        this.alertMessage = message;
        this.alertClass = this.errorClass;
    }

    public showSuccess(message: string): void {
        this.showAlert = true;
        this.alertMessage = message;
        this.alertClass = this.successClass;
    }

    public clearAlert(): void {
        this.showAlert = false;
        this.alertClass = undefined;
        this.alertMessage = undefined;
    }

}
