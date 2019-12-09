import { Assessment } from '../models/Assessment';
export interface AssessmentsPage {

    loading: boolean;
    assessments: Assessment[];
    formStatus: string;

    totalAssessments: number;

}
