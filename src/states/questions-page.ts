import { Question } from '../models/Question';
export interface QuestionsPage {

    loading: boolean;
    questions: Question[];
    formStatus: string;

    totalQuestions: number;

}
