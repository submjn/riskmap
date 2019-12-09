import { Company } from '../models/Company';
export interface CompaniesPage {

    loading: boolean;
    companies: Company[];
    formStatus: string;

    totalCompanies: number;

}
