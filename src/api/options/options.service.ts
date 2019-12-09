import { OptionsPageStore } from './options.store';
import { OptionFirestore } from './option.firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Option } from '../../models/Option';
import { tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class OptionsService {

    constructor(
        private firestore: OptionFirestore,
        private store: OptionsPageStore,
    ) {
        this.firestore.collection$().pipe(
            tap(options => {
                this.store.patch({
                    loading: false,
                    options,
                    totalOptions: options.length,
                }, `options collection subscription`);
            }),
        ).subscribe();
    }

    get options$(): Observable<Option[]> {
        return this.store.state$.pipe(map(state => state.loading
            ? []
            : state.options));
    }

    get totalOptions$(): Observable < number > {
        return this.store.state$.pipe(map(state => state.totalOptions));
    }

    get loading$(): Observable<boolean> {
        return this.store.state$.pipe(map(state => state.loading));
    }

    get noResults$(): Observable<boolean> {
        return this.store.state$.pipe(
            map(state => {
                return !state.loading
                    && state.options
                    && state.options.length === 0;
            }),
        );
    }

    get formStatus$(): Observable<string> {
        return this.store.state$.pipe(map(state => state.formStatus));
    }

    create(option: Option) {
        this.store.patch({
            loading: true,
            options: [],
            formStatus: 'Saving...',
        }, 'option create');
        return this.firestore.create(option).then(_ => {
            this.store.patch({
                formStatus: 'Saved!',
            }, 'option create SUCCESS');
            setTimeout(() => this.store.patch({
                formStatus: '',
            }, 'option create timeout reset formStatus'), 2000);
        }).catch(err => {
            this.store.patch({
                loading: false,
                formStatus: 'An error ocurred',
            }, 'option create ERROR');
        });
    }

    delete(id: string): any {
        this.store.patch({ loading: true, options: [] }, 'option delete');
        return this.firestore.delete(id).catch(err => {
            this.store.patch({
                loading: false,
                formStatus: 'An error ocurred',
            }, 'option delete ERROR');
        });
    }
}
