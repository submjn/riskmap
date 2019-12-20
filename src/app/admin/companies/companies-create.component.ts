import { CompaniesService } from '../../../services/companies/companies.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
    selector: 'ngx-companies-create',
    templateUrl: './companies-create.component.html',
})
export class CompaniesCreateComponent implements OnInit {

    form: FormGroup = new FormGroup({
        name: new FormControl('', Validators.required),
        location: new FormControl('', Validators.required),
        isActive: new FormControl(true),
        noOfEmployees: new FormControl(''),
    });

    status$: Observable < string > ;

    empCountList = [
        '1 - 100',
        '101 - 500',
        '501 - 1000',
        '1000+',
    ];

    constructor(
        private companies: CompaniesService,
    ) {}

    ngOnInit() {
        this.status$ = this.companies.formStatus$;
    }

    isInvalid(name) {
        return this.form.controls[name].invalid
           && (this.form.controls[name].dirty || this.form.controls[name].touched);
    }

    async submit() {
        this.form.disable();
        await this.companies.create({ ...this.form.value});
        this.form.reset();
        this.form.enable();
    }

}
