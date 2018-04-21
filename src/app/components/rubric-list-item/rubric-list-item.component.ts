import { Component, Input } from '@angular/core';
import { RubricInterface } from '../../object-interfaces/rubric.interface';

@Component({
    selector: 'rc-rubric-list-item',
    styleUrls: ['./rubric-list-item.component.css'],
    templateUrl: './rubric-list-item.component.html',
})
export class RubricListItemComponent {
    @Input() public rubric: RubricInterface;
}
