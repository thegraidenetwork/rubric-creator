import { Component, Input } from '@angular/core';
import { RubricInterface } from '../../object-interfaces/rubric.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteRubricModalComponent } from '../delete-rubric-modal/delete-rubric-modal.component';

@Component({
    selector: 'rc-rubric-action-button-group',
    styleUrls: ['./rubric-action-button-group.component.css'],
    templateUrl: './rubric-action-button-group.component.html',
})
export class RubricActionButtonGroupComponent {
    @Input() public floatRight: boolean = false;
    @Input() public rubric: RubricInterface;
    @Input() public showPrint: boolean = false;
    public copied: boolean = false;
    private baseUrl: string = 'https://www.rubriccreator.com';

    constructor(private modalService: NgbModal) {}

    public copyLink(): false {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = `${this.baseUrl}/rubrics/${this.rubric.uuid}`;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.copied = true;

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
