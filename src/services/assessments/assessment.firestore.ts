import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Assessment } from '../../models/Assessment';

@Injectable({
    providedIn: 'root',
})

export class AssessmentFirestore extends FirestoreService<Assessment> {

    protected basePath = 'assessments';

}
