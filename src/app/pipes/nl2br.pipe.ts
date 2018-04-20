import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'nl2br',
})
export class Nl2brPipe implements PipeTransform {
    public transform(value: string): string {
        return value === undefined ? value : value.replace(/(?:\r\n|\r|\n)/g, '<br/>');
    }
}
