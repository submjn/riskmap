import { QuestionsService } from '../../../services/questions/questions.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'ngx-questions-create',
    templateUrl: './questions-create.component.html',
    styles: [`
        nb-select { width: 100%; }
        label { font-weight: bold; }
    `],
})
export class QuestionsFormComponent implements OnInit {

    form: FormGroup = new FormGroup({
        questionText: new FormControl('', Validators.required),
        section: new FormControl(''),
        helpText: new FormControl(''),
        category: new FormControl([]),
        option: new FormControl(''),
    });

    options = [
        'Option 1',
        'Option 2',
        'Option 3',
    ];

    categories = [
        'NIST CSF AT – 1',
        'CCS CSC 9',
        'COBIT 5 APO07.03',
        'BAI05.07',
        'ISA 62443-2-1:2009 4.3.2.4.2',
        'ISO/IEC 27001:2013 A.7.2.2',
        'NIST SP 800-53 Rev. 4 AT-2, PM-13',
    ];

    selectedSection = 'Welcome';
    sections = [
        'Welcome',
        'Identify',
        'Protect',
        'Detect',
        'Respond',
        'Recover',
    ];

    status$: Observable < string > ;

    constructor(
        private questions: QuestionsService,
    ) {}

    ngOnInit() {
        this.status$ = this.questions.formStatus$;
    }

    isInvalid(name) {
        return this.form.controls[name].invalid
           && (this.form.controls[name].dirty || this.form.controls[name].touched);
    }

    async submit() {
        this.form.disable();
        await this.questions.create({ ...this.form.value,
        });
        this.form.reset({
            questionText: '',
            section: '',
            helpText: '',
            category: [],
            option: '',
        });
        this.form.enable();
    }

    addOption() {
        // tslint:disable-next-line: no-console
        console.log('Test');
    }

}
