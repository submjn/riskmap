import { CompaniesPageStore } from './companies.store';
import { CompanyFirestore } from './company.firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../../models/Company';
import { tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class CompaniesService {

    constructor(
        private firestore: CompanyFirestore,
        private store: CompaniesPageStore,
    ) {
        this.firestore.collection$().pipe(
            tap(companies => {
                this.store.patch({
                    loading: false,
                    companies,
                    totalCompanies: companies.length,
                }, `companies collection subscription`);
            }),
        ).subscribe();
    }

    get companies$(): Observable<Company[]> {
        return this.store.state$.pipe(map(state => state.loading
            ? []
            : state.companies));
    }

    get totalCompanies$(): Observable < number > {
        return this.store.state$.pipe(map(state => state.totalCompanies));
    }

    get loading$(): Observable<boolean> {
        return this.store.state$.pipe(map(state => state.loading));
    }

    get noResults$(): Observable<boolean> {
        return this.store.state$.pipe(
            map(state => {
                return !state.loading
                    && state.companies
                    && state.companies.length === 0;
            }),
        );
    }

    get formStatus$(): Observable<string> {
        return this.store.state$.pipe(map(state => state.formStatus));
    }

    create(company: Company) {
        this.store.patch({
            loading: true,
            companies: [],
            formStatus: 'Saving...',
        }, 'company create');
        return this.firestore.create(company).then(_ => {
            this.store.patch({
                formStatus: 'Saved!',
            }, 'company create SUCCESS');
            setTimeout(() => this.store.patch({
                formStatus: '',
            }, 'company create timeout reset formStatus'), 2000);
        }).catch(err => {
            this.store.patch({
                loading: false,
                formStatus: 'An error ocurred',
            }, 'company create ERROR');
        });
    }

    delete(id: string): any {
        this.store.patch({ loading: true, companies: [] }, 'company delete');
        return this.firestore.delete(id).catch(err => {
            this.store.patch({
                loading: false,
                formStatus: 'An error ocurred',
            }, 'company delete ERROR');
        });
    }
}
