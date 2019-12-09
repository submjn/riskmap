import { AssessmentsService } from '../../../api/assessments/assessments.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'ngx-assessments-create',
    templateUrl: './assessments-create.component.html',
})
export class AssessmentsFormComponent implements OnInit {

    form: FormGroup = new FormGroup({
        title: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        question: new FormControl('', Validators.required),
    });

    questions = [
        'Question 1',
        'Question 2',
        'Question 3',
    ];

    status$: Observable < string > ;

    constructor(
        private assessments: AssessmentsService,
    ) {}

    ngOnInit() {
        this.status$ = this.assessments.formStatus$;
    }

    isInvalid(name) {
        return this.form.controls[name].invalid
           && (this.form.controls[name].dirty || this.form.controls[name].touched);
    }

    async submit() {
        this.form.disable();
        await this.assessments.create({ ...this.form.value,
        });
        this.form.reset();
        this.form.enable();
    }

}
