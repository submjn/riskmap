import { Component, OnInit, NgModule } from '@angular/core';
import { NbCardModule, NbInputModule, NbCheckboxModule } from '@nebular/theme';

import { Question, Option } from '../../../@core/data/quiz';
import { QuizService } from '../../../@core/mock/quiz.services';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-protect',
  templateUrl: './protect.component.html',
  styleUrls: ['./protect.component.scss'],
})
@NgModule({
  imports: [
    NbCardModule,
    NbInputModule,
    NbCheckboxModule,
  ],
})
export class ProtectComponent implements OnInit {
  quizes: any;
  quiz: any;
  option;

  thirdForm: FormGroup;

  constructor(private quizService: QuizService, private fb: FormBuilder) { }

  ngOnInit() {
    this.quizes = this.quizService.getQuizes();
    this.locadQuiz();
    this.thirdForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });
  }

  onFirstSubmit() {
    this.thirdForm.markAsDirty();
    const answers = [];
    // tslint:disable-next-line: max-line-length
    this.quiz.questions.forEach(x => answers.push({ 'quizId': this.quiz.id, 'questionId': x.id, 'answered': x.answered }));

    // Post your data to the server here. answers contains the questionId and the users' answer.
    // tslint:disable-next-line: no-console
    console.log(this.quiz.questions);

    const key = 'protect';
    localStorage.setItem(key, this.quiz.questions);
  }

  locadQuiz() {
    this.quizService.getQuestionsBySection('protect').subscribe(res => {
      this.quiz = res;
    });
  }

  get welcomeQuestions() {
    return this.quiz;
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
