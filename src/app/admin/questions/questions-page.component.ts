import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../../services/questions/questions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-questions-page',
  templateUrl: './questions-page.component.html',
})
export class QuestionsPageComponent implements OnInit {

  total$: Observable < number > ;

    constructor(
        private questions: QuestionsService,
    ) {}

    ngOnInit() {
        this.total$ = this.questions.totalQuestions$;
    }

}
