import { Company } from '../../../models/Company';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompaniesService } from '../../../services/companies/companies.service';

@Component({
    selector: 'ngx-companies-list',
    templateUrl: './companies-list.component.html',
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
