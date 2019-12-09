import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Company } from '../../models/Company';

@Injectable({
    providedIn: 'root',
})
export class CompanyFirestore extends FirestoreService<Company> {

    protected basePath = 'companies';

}
