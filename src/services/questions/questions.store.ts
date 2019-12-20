import { StoreService } from '../store.service';
import { Injectable } from '@angular/core';
import { QuestionsPage } from '../../states/questions-page';

@Injectable({
    providedIn: 'root',
})

export class QuestionsPageStore extends StoreService<QuestionsPage> {
    protected store = 'questions-page';

    constructor() {
        super({
            loading: true,
            questions: [],
            totalQuestions: 0,
        });
    }
}
