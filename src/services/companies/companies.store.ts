import { CompaniesPage } from '../../states/companies-page';
import { StoreService } from '../store.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CompaniesPageStore extends StoreService<CompaniesPage> {
    protected store = 'companies-page';

    constructor() {
        super({
            loading: true,
            companies: [],
            totalCompanies: 0,
        });
    }
}
