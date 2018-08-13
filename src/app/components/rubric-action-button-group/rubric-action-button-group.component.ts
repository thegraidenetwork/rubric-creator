import { Component, Input } from '@angular/core';
import { RubricInterface } from '../../object-interfaces/rubric.interface';

@Component({
    selector: 'rc-rubric-action-button-group',
    templateUrl: './rubric-action-button-group.component.html',
    styleUrls: ['./rubric-action-button-group.component.css'],
})
export class RubricActionButtonGroupComponent {
    @Input() public floatRight: boolean = false;
    @Input() public rubric: RubricInterface;
    @Input() public showPrint: boolean = false;

    public copyLink(): false {
        console.log('Copy link');

        return false;
    }

    public deleteRubric(): false {
        console.log('Delete rubric');

        return false;
    }

    public printRubric(): false {
        window.print();

        return false;
    }
}
