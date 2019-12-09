import { StoreService } from '../store.service';
import { Injectable } from '@angular/core';
import { AssessmentsPage } from '../../states/assessments-page';

@Injectable({
    providedIn: 'root',
})

export class AssessmentsPageStore extends StoreService<AssessmentsPage> {
    protected store = 'assessments-page';

    constructor() {
        super({
            loading: true,
            assessments: [],
            totalAssessments: 0,
        });
    }
}
