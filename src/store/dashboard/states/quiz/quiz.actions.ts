import { QuizStateModel } from './quiz.state';

export class SetQuizData {
    static readonly type = '[Quiz] Set Quiz data action';
    constructor(public payload: QuizStateModel) {}
}

export class QuizReset {
    public static readonly type = '[Quiz] Reset Quiz action';
    constructor() {}
}

// export class AddQuestion {
//     static readonly type = '[Question] Add';
//     constructor(public payload: Question) {}
// }

// export class AddOption {
//     static readonly type = '[Option] Add';
//     constructor(public payload: Option) {}
// }
