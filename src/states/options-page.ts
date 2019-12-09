import { Option } from '../models/Option';
export interface OptionsPage {

    loading: boolean;
    options: Option[];
    formStatus: string;

    totalOptions: number;

}
