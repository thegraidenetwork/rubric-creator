import { Component, Input } from '@angular/core';
import { RubricInterface } from '../../object-interfaces/rubric.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteRubricModalComponent } from '../delete-rubric-modal/delete-rubric-modal.component';

@Component({
    selector: 'rc-rubric-action-button-group',
    templateUrl: './rubric-action-button-group.component.html',
    styleUrls: ['./rubric-action-button-group.component.css'],
})
export class RubricActionButtonGroupComponent {
    @Input() public floatRight: boolean = false;
    @Input() public rubric: RubricInterface;
    @Input() public showPrint: boolean = false;

    constructor(private modalService: NgbModal) {}

    public copyLink(): false {
        console.log('Copy link');

        return false;
    }

    public openDeleteRubricModal(): false {
        const modalRef = this.modalService.open(DeleteRubricModalComponent);
        modalRef.componentInstance.rubric = this.rubric;

        return false;
    }

    public printRubric(): false {
        window.print();

        return false;
    }
}
