import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Question } from '../../models/Question';

@Injectable({
    providedIn: 'root',
})

export class QuestionFirestore extends FirestoreService<Question> {

    protected basePath = 'questions';

}
