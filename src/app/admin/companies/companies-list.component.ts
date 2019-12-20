import { Company } from '../../../models/Company';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompaniesService } from '../../../services/companies/companies.service';

@Component({
    selector: 'ngx-companies-list',
    templateUrl: './companies-list.component.html',
    styles: [`
        .company-list-item { padding: 1rem 0; }
        .category-badge { left: 16px!important; top: -16px!important; }
        .company-title { margin-top: 8px; }
        .btn-category {
            font-size: 0.8rem;
            margin-right: 6px;
            margin-bottom: 6px;
            padding: 0 4px; color:
            white; font-weight: bold;
        }
    `],
})
export class CompaniesListComponent implements OnInit {
    loading$: Observable<boolean>;
    companies$: Observable<Company[]>;
    noResults$: Observable<boolean>;

    constructor(
        private companies: CompaniesService,
    ) {}

    ngOnInit() {
        this.loading$ = this.companies.loading$;
        this.noResults$ = this.companies.noResults$;
        this.companies$ = this.companies.companies$;
    }

    delete(company: Company) {
        this.companies.delete(company.id);
    }

}
