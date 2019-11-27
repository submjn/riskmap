import { Component, OnInit, NgModule } from '@angular/core';
import { NbCardModule, NbInputModule, NbCheckboxModule } from '@nebular/theme';

import { Question, Option } from '../../../@core/data/quiz';
import { QuizService } from '../../../@core/mock/quiz.services';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-identify',
  templateUrl: './identify.component.html',
  styleUrls: ['./identify.component.scss']
})
@NgModule({
  imports: [
    NbCardModule,
    NbInputModule,
    NbCheckboxModule,
  ],
})
export class IdentifyComponent implements OnInit {
  quizes: any;
  quiz: any;
  option;

  secondForm: FormGroup;

  constructor(private quizService: QuizService, private fb: FormBuilder) { }

  ngOnInit() {
    this.quizes = this.quizService.getQuizes();
    this.locadQuiz();
    this.secondForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });
  }

  locadQuiz() {
    this.quizService.getQuestionsBySection('identify').subscribe(res => {
      this.quiz = res;
    });
  }

  get identifyQuestions() {
    return this.quiz;
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
    const answers = [];
    // tslint:disable-next-line: max-line-length
    this.quiz.questions.forEach(x => answers.push({ 'quizId': this.quiz.id, 'questionId': x.id, 'answered': x.answered }));

    // Post your data to the server here. answers contains the questionId and the users' answer.
    // tslint:disable-next-line: no-console
    console.log(this.quiz.questions);

    const key = 'identify';
    localStorage.setItem(key, this.quiz.questions);
  }

  onSelect(question: Question, option: Option) {
    if (question.inputType === 2) {
      // console.log(question);
      // tslint:disable-next-line: no-console
      console.log(option);
      if (question.relatedQuestion) {
        const qarr = question.relatedQuestion.find(x => x.optionId === option.id);
        // console.log(qarr);
        const questionArr = this.quiz.questions;
        if (qarr) {
          let ShowChildQuestionArr = [], HideChildQuestioinArr = [];
          if (qarr.show) {
            ShowChildQuestionArr = qarr.show.qid;
            for ( let i = 0; i < ShowChildQuestionArr.length; i++) {
              const childQuestion = questionArr.find(x => x.id === ShowChildQuestionArr[i]);
              childQuestion.isActive = true;
            }
          }
          if (qarr.hide) {
            HideChildQuestioinArr = qarr.hide.qid;
            for ( let i = 0; i < HideChildQuestioinArr.length; i++) {
              const childQuestion = questionArr.find(x => x.id === HideChildQuestioinArr[i]);
              childQuestion.isActive = false;
            }
          }
        //  console.log(ShowChildQuestionArr);
        }
      }
    }
  }

  isAnswered(question: Question) {
    return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
  }

}
