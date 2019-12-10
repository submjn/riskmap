import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompaniesService } from '../../../services/companies/companies.service';

@Component({
  selector: 'ngx-companies-page',
  templateUrl: './companies-page.component.html',
})
export class CompaniesPageComponent implements OnInit {

  total$: Observable < number > ;

    constructor(
        private companies: CompaniesService,
    ) {}

    ngOnInit() {
        this.total$ = this.companies.totalCompanies$;
    }

}
