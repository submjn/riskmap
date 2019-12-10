import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { OptionsService } from '../../../services/options/options.service';

@Component({
    selector: 'ngx-option-create',
    templateUrl: './options-create.component.html',
})
export class OptionsFormComponent implements OnInit {

    form: FormGroup = new FormGroup({
        title: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        // question: new FormControl('', Validators.required),
    });

    // questions = [
    //     'Question 1',
    //     'Question 2',
    //     'Question 3',
    // ];

    status$: Observable < string > ;

    constructor(
        private options: OptionsService,
    ) {}

    ngOnInit() {
        this.status$ = this.options.formStatus$;
    }

    isInvalid(name) {
        return this.form.controls[name].invalid
           && (this.form.controls[name].dirty || this.form.controls[name].touched);
    }

    async submit() {
        this.form.disable();
        await this.options.create({ ...this.form.value,
        });
        this.form.reset();
        this.form.enable();
    }

}
