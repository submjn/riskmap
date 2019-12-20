import { QuestionsPageStore } from './questions.store';
import { QuestionFirestore } from './question.firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../../models/Question';
import { tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class QuestionsService {

    constructor(
        private firestore: QuestionFirestore,
        private store: QuestionsPageStore,
    ) {
        this.firestore.collection$().pipe(
            tap(questions => {
                this.store.patch({
                    loading: false,
                    questions,
                    totalQuestions: questions.length,
                }, `questions collection subscription`);
            }),
        ).subscribe();
    }

    get questions$(): Observable<Question[]> {
        // tslint:disable-next-line: no-console
        // console.log(this.store.state$.pipe(map(state => {
        //     if (!state.loading) {
        //         // tslint:disable-next-line: no-console
        //         console.log(state.questions.sort((a, b) => a.section.localeCompare(b.section)));
        //     }
        // })));
        return this.store.state$.pipe(map(state => state.loading
            ? []
            : state.questions.sort((a, b) => a.section.localeCompare(b.section))));
    }

    get totalQuestions$(): Observable < number > {
        return this.store.state$.pipe(map(state => state.totalQuestions));
    }

    get loading$(): Observable<boolean> {
        return this.store.state$.pipe(map(state => state.loading));
    }

    get noResults$(): Observable<boolean> {
        return this.store.state$.pipe(
            map(state => {
                return !state.loading
                    && state.questions
                    && state.questions.length === 0;
            }),
        );
    }

    get formStatus$(): Observable<string> {
        return this.store.state$.pipe(map(state => state.formStatus));
    }

    create(question: Question) {
        this.store.patch({
            loading: true,
            questions: [],
            formStatus: 'Saving...',
        }, 'question create');
        return this.firestore.create(question).then(_ => {
            this.store.patch({
                formStatus: 'Saved!',
            }, 'question create SUCCESS');
            setTimeout(() => this.store.patch({
                formStatus: '',
            }, 'question create timeout reset formStatus'), 2000);
        }).catch(err => {
            this.store.patch({
                loading: false,
                formStatus: 'An error ocurred',
            }, 'question create ERROR');
        });
    }

    delete(id: string): any {
        this.store.patch({ loading: true, questions: [] }, 'question delete');
        return this.firestore.delete(id).catch(err => {
            this.store.patch({
                loading: false,
                formStatus: 'An error ocurred',
            }, 'question delete ERROR');
        });
    }

    // currentQuestion(id: string): any {
    //     this.store.patch({ loading: true, questions: [] }, 'current question');
    //     // tslint:disable-next-line: max-line-length
    //     return this.store.state$.pipe(map(state => state.loading ? [] : state.questions.filter(q => q.id === id)));
    // }
}
