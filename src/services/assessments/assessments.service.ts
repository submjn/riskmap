import { AssessmentsPageStore } from './assessments.store';
import { AssessmentFirestore } from './assessment.firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assessment } from '../../models/Assessment';
import { tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AssessmentsService {

    constructor(
        private firestore: AssessmentFirestore,
        private store: AssessmentsPageStore,
    ) {
        this.firestore.collection$().pipe(
            tap(assessments => {
                this.store.patch({
                    loading: false,
                    assessments,
                    totalAssessments: assessments.length,
                }, `assessments collection subscription`);
            }),
        ).subscribe();
    }

    get assessments$(): Observable<Assessment[]> {
        return this.store.state$.pipe(map(state => state.loading
            ? []
            : state.assessments));
    }

    get totalAssessments$(): Observable < number > {
        return this.store.state$.pipe(map(state => state.totalAssessments));
    }

    get loading$(): Observable<boolean> {
        return this.store.state$.pipe(map(state => state.loading));
    }

    get noResults$(): Observable<boolean> {
        return this.store.state$.pipe(
            map(state => {
                return !state.loading
                    && state.assessments
                    && state.assessments.length === 0;
            }),
        );
    }

    get formStatus$(): Observable<string> {
        return this.store.state$.pipe(map(state => state.formStatus));
    }

    create(assessment: Assessment) {
        this.store.patch({
            loading: true,
            assessments: [],
            formStatus: 'Saving...',
        }, 'assessment create');
        return this.firestore.create(assessment).then(_ => {
            this.store.patch({
                formStatus: 'Saved!',
            }, 'assessment create SUCCESS');
            setTimeout(() => this.store.patch({
                formStatus: '',
            }, 'assessment create timeout reset formStatus'), 2000);
        }).catch(err => {
            this.store.patch({
                loading: false,
                formStatus: 'An error ocurred',
            }, 'assessment create ERROR');
        });
    }

    delete(id: string): any {
        this.store.patch({ loading: true, assessments: [] }, 'assessment delete');
        return this.firestore.delete(id).catch(err => {
            this.store.patch({
                loading: false,
                formStatus: 'An error ocurred',
            }, 'assessment delete ERROR');
        });
    }
}
