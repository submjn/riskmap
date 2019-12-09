import { Component, OnInit } from '@angular/core';
import { AssessmentsService } from '../../../api/assessments/assessments.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-assessments-page',
  templateUrl: './assessments-page.component.html',
})
export class AssessmentsPageComponent implements OnInit {

  total$: Observable < number > ;

    constructor(
        private assessments: AssessmentsService,
    ) {}

    ngOnInit() {
        this.total$ = this.assessments.totalAssessments$;
    }

}
