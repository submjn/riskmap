import { Action, Selector, State, StateContext } from '@ngxs/store';
import { QuizReset, SetQuizData } from './quiz.actions';


export interface QuizConfigStateModel {
    allowBack: boolean;
    allowReview: boolean;
    autoMove: boolean;  // if boolean; it will move to next question automatically when answered.
    // duration: number;  // indicates the time in which quiz needs to be completed. 0 means unlimited.
    // pageSize: number;
    requiredAll: boolean;  // indicates if you must answer all the questions before submitting.
    // richText: boolean;
    // shuffleQuestions: boolean;
    // shuffleOptions: boolean;
    // showClock: boolean;
    // showPager: boolean;
    // theme: string;
}

export interface OptionStateModel {
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

export interface QuestionStateModel {
    id: number;
    parentId: number;
    section: string;
    inputType: number;
    category: string[];
    name: string;
    helpText: string;
    required: boolean;
    options: OptionStateModel[];
    answered: boolean;
    isActive: boolean;
    relatedQuestion: any;
}

export interface QuizStateModel {
    id: number;
    name: string;
    description: string;
    config: QuizConfigStateModel;
    questions: QuestionStateModel[];
}

@State<QuizStateModel>({
    name: 'Quiz',
    defaults: {
        id: 1,
        name: 'Quiz',
        description: '',
        config: {
            allowBack: true,
            allowReview: true,
            autoMove: false,  // if boolean; it will move to next question automatically when answered.
            // duration: number;  // indicates the time in which quiz needs to be completed. 0 means unlimited.
            // pageSize: number;
            requiredAll: false,  // indicates if you must answer all the questions before submitting.
            // richText: false,
            // shuffleQuestions: false,
            // shuffleOptions: false,
            // showClock: false,
            // showPager: false,
            // theme: '',
        },
        questions: [],
    },
})

@State<QuestionStateModel>({
    name: 'Question',
    defaults: {
        id: 1001,
        parentId: null,
        section: '',
        inputType: 1,
        category: [],
        name: '',
        helpText: '',
        required: true,
        options: [],
        answered: false,
        isActive: true,
        relatedQuestion: [],
    },
})

@State<OptionStateModel>({
    name: 'Option',
    defaults: {
        id: 1055,
        questionId: 1001,
        name: '',
        selected: false,
        show: false,
        inputType: 1,
        subOptionId: null,
        importance: '',
        remediation: '',
        riskValue: 10,
    }
})
export class QuizState {
    @Selector()
    public static getQuizState(state: QuizStateModel): QuizStateModel {
        return QuizState.getInstanceState(state);
    }

    private static setInstanceState(state: QuizStateModel): QuizStateModel {
    return { ...state };
    }

    private static getInstanceState(state: QuizStateModel): QuizStateModel {
    return { ...state };
    }
}
