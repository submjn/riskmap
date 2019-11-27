import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { NbCardModule, NbStepperComponent } from '@nebular/theme';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Question, QuizConfig, Option } from '../../@core/data/quiz';
import { QuizService } from '../../@core/mock/quiz.services';

@Component({
  selector: 'ngx-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})

@NgModule({
  imports: [
    NbCardModule,
  ],
})
export class QuizComponent implements OnInit {
  @ViewChild('stepper', {static: false}) stepper: NbStepperComponent;

  // firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    // this.firstForm = this.fb.group({
    //   firstCtrl: ['', Validators.required],
    // });

    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });
  }

  // onFirstSubmit() {
  //   this.firstForm.markAsDirty();
  // }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    this.thirdForm.markAsDirty();
  }

}

// import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
// import { NbCardModule, NbStepperComponent } from '@nebular/theme';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { Question, QuizConfig, Option } from '../../@core/data/quiz';
// import { QuizService } from '../../@core/mock/quiz.services';

// @Component({
//   selector: 'ngx-quiz',
//   templateUrl: './quiz.component.html',
//   styleUrls: ['./quiz.component.scss']
// })

// @NgModule({
//   imports: [
//     NbCardModule,
//   ],
// })
// export class QuizComponent implements OnInit {
//   @ViewChild('stepper', {static: false}) stepper: NbStepperComponent;

//   quizes: any;
//   quiz: any;
//   mode = 'quiz';
//   quizId: number;
//   config: QuizConfig = {
//     'allowBack': true,
//     'allowReview': true,
//     'autoMove': false,  // if true, it will move to next question automatically when answered.
//     'duration': 0,  // indicates the time (in secs) in which quiz needs to be completed. 0 means unlimited.
//     'pageSize': 1,
//     'requiredAll': false,  // indicates if you must answer all the questions before submitting.
//     'richText': false,
//     'shuffleQuestions': false,
//     'shuffleOptions': false,
//     'showClock': false,
//     'showPager': true,
//     'theme': 'none',
//   };

//   pager = {
//     index: 0,
//     size: 1,
//     count: 1,
//   };
//   timer: any = null;
//   startTime: Date;
//   endTime: Date;
//   ellapsedTime = '00:00';
//   duration = '0';

//   constructor(private quizService: QuizService) { }

//   ngOnInit() {
//     this.quizes = this.quizService.getQuizes().subscribe(res => {
//       this.quizId = res[0].id;
//     });
//     this.loadQuiz(this.quizId);
//   }

//   loadQuiz(quizId: number) {
//     this.quizService.getQuizById(quizId).subscribe(res => {
//       this.quiz = res;
//       this.pager.count = this.quiz.questions.length;
//       this.startTime = new Date();
//       this.ellapsedTime = '00:00';
//       this.timer = setInterval(() => { this.tick(); }, 1000);
//       this.duration = this.parseTime(this.config.duration);
//     });
//     this.mode = 'quiz';
//   }

//   tick() {
//     const now = new Date();
//     const diff = (now.getTime() - this.startTime.getTime()) / 1000;
//     if (diff >= this.config.duration) {
//       // this.onSubmit();
//     }
//     this.ellapsedTime = this.parseTime(diff);
//   }

//   parseTime(totalSeconds: number) {
//     let mins: string | number = Math.floor(totalSeconds / 60);
//     let secs: string | number = Math.round(totalSeconds % 60);
//     mins = (mins < 10 ? '0' : '') + mins;
//     secs = (secs < 10 ? '0' : '') + secs;
//     return `${mins}:${secs}`;
//   }

//   get filteredQuestions() {
//     // return (this.quiz.questions) ?
//     //   this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
//     // console.log(this.quiz.questions)
//     return this.quiz.questions;
//   }

//   onSelect(question: Question, option: Option) {
//     if (question.inputType === 2) {
//       // console.log(question);
//       // tslint:disable-next-line: no-console
//       console.log(option);
//       if (question.relatedQuestion) {
//         const qarr = question.relatedQuestion.find(x => x.optionId === option.id);
//         // console.log(qarr);
//         const questionArr = this.quiz.questions;
//         if (qarr) {
//           let ShowChildQuestionArr = [], HideChildQuestioinArr = [];
//           if (qarr.show) {
//             ShowChildQuestionArr = qarr.show.qid;
//             for ( let i = 0; i < ShowChildQuestionArr.length; i++) {
//               const childQuestion = questionArr.find(x => x.id === ShowChildQuestionArr[i]);
//               childQuestion.isActive = true;
//             }
//           }
//           if (qarr.hide) {
//             HideChildQuestioinArr = qarr.hide.qid;
//             for ( let i = 0; i < HideChildQuestioinArr.length; i++) {
//               const childQuestion = questionArr.find(x => x.id === HideChildQuestioinArr[i]);
//               childQuestion.isActive = false;
//             }
//           }
//         //  console.log(ShowChildQuestionArr);
//         }
//       }
//     }

//     if (this.config.autoMove) {
//       this.goTo(this.pager.index + 1);
//     }
//   }

//   goTo(index: number) {
//     if (index >= 0 && index < this.pager.count) {
//       this.pager.index = index;
//       this.mode = 'quiz';
//     }
//   }

//   isAnswered(question: Question) {
//     return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
//   }

//   // isCorrect(question: Question) {
//   //   return question.options.every(x => x.selected === x.) ? 'correct' : 'wrong';
//   // }

//   showResults(question: Question) {
//     // console.log(question.options);
//     const x = [];
//     for ( let i = 0; i < question.options.length; i++) {
//       if (question.options[i].selected) {
//         x.push(question.options[i]);
//       }
//     }
//     return x;
//     // tslint:disable-next-line: no-console
//     console.log(x);
//   }

//   onSubmit() {
//     const answers = [];
//     // tslint:disable-next-line: max-line-length
//     this.quiz.questions.forEach(x => answers.push({ 'quizId': this.quiz.id, 'questionId': x.id, 'answered': x.answered }));

//     // Post your data to the server here. answers contains the questionId and the users' answer.
//     // tslint:disable-next-line: no-console
//     console.log(this.quiz.questions);
//     this.mode = 'result';
//   }

//   welcomeFormSubmit() {
//     this.stepper.next();
//   }

//   stepperReset() {
//     this.stepper.reset();
//   }
// }
