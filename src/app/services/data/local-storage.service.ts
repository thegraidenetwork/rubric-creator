import { RubricInterface } from '../../interfaces/rubric.interface';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const defaultRubrics: Array<RubricInterface> = [
    {
        name: 'Rubric 1',
        uuid: '5ad54f770f8cf5632c4a9497',
    },
    {
        name: 'Rubric 2',
        uuid: '5ad54fd50f8cf5632c4a949c',
    },
    {
        name: 'Rubric 3',
        uuid: '5ad54ff60917ce62fac64241',
    },
    {
        name: 'Rubric 4',
        uuid: '5ad550230f8cf5632c4a94a1',
    },
];

@Injectable()
export class LocalStorageService {
    private rubrics = new BehaviorSubject<Array<RubricInterface>>(defaultRubrics);

    constructor(private localStorage: LocalStorage) {}

    public getRubrics(): BehaviorSubject<Array<RubricInterface>> {
        this.localStorage.getItem<Array<RubricInterface>>('rubrics')
            .subscribe(rubrics => {
                if (rubrics !== null && rubrics !== undefined) {
                    this.rubrics.next(rubrics);
                }
            });

        return this.rubrics;
    }

}
