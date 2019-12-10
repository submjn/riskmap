import { StoreService } from '../store.service';
import { Injectable } from '@angular/core';
import { OptionsPage } from '../../states/options-page';

@Injectable({
    providedIn: 'root'
})

export class OptionsPageStore extends StoreService<OptionsPage> {
    protected store = 'options-page';

    constructor() {
        super({
            loading: true,
            options: [],
            totalOptions: 0,
        });
    }
}

