import { Component, Input, OnInit } from '@angular/core';
import { RubricInterface } from '../../object-interfaces/rubric.interface';

@Component({
    selector: 'rc-rubric-list-item',
    templateUrl: './rubric-list-item.component.html',
    styleUrls: ['./rubric-list-item.component.css']
})
export class RubricListItemComponent {
    @Input() public rubric: RubricInterface;
}
