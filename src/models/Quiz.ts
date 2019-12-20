export interface Quiz {
    // id: number;
    // questionId: number;
    // name: string;
    // selected: any;
    // show: boolean;
    // inputType: number;
    // subOptionId: number;
    // importance: string;
    // remediation: string;
    // riskValue: number;
    // userId: number;
    id: number;
    userId: number;
    title: string;
    body: string;
    completed: boolean;
}


// export interface Question {
//     id: number;
//     parentId: number;
//     section: string;
//     inputType: number;
//     category: string[];
//     name: string;
//     helpText: string;
//     required: boolean;
//     options: Option[];
//     answered: boolean;
//     isActive: boolean;
//     relatedQuestion: any;
// }

// export interface Quiz {
//     id: number;
//     name: string;
//     description: string;
//     questions: Question[];
// }
