import { Observable } from 'rxjs';

export interface QuizConfig {
    allowBack: boolean;
    allowReview: boolean;
    autoMove: boolean;  // if boolean; it will move to next question automatically when answered.
    duration: number;  // indicates the time in which quiz needs to be completed. 0 means unlimited.
    pageSize: number;
    requiredAll: boolean;  // indicates if you must answer all the questions before submitting.
    richText: boolean;
    shuffleQuestions: boolean;
    shuffleOptions: boolean;
    showClock: boolean;
    showPager: boolean;
    theme: string;
}

export interface Option {
    id: number;
    questionId: number;
    name: string;
    selected: any;
    show: boolean;
    inputType: number;
    subOptionId: number;
    importance: string;
    remediation: string;
    riskValue: number;
}

export interface Question {
    id: number;
    parentId: number;
    section: string;
    inputType: number;
    category: string[];
    name: string;
    helpText: string;
    required: boolean;
    options: Option[];
    answered: boolean;
    isActive: boolean;
    relatedQuestion: any;
}

export interface Quiz {
    id: number;
    name: string;
    description: string;
    config: QuizConfig;
    questions: Question[];
}

export abstract class QuizData {
  abstract getQuizConfig(): Observable<QuizConfig[]>;
  abstract getOptions(): Observable<Option[]>;
  abstract getQuestions(): Observable<Question[]>;
  abstract getQuizes(): Observable<Quiz[]>;
  abstract getQuizById(id: number): Observable<Quiz>;
  abstract getQuestionsBySection(section: string): Observable<Question[]>;
}
