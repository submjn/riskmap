import { Option } from './Option';

export interface Question {
    id: string;
    // parentId: number;
    // section: string;
    // inputType: number;
    section: string;
    category: string[];
    questionText: string;
    helpText: string;
    // required: boolean;
    // options: Option[];
    // answered: boolean;
    // isActive: boolean;
    // relatedQuestion: any;
}