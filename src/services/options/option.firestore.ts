import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Option } from '../../models/Option';

@Injectable({
    providedIn: 'root',
})
export class OptionFirestore extends FirestoreService<Option> {

    protected basePath = 'options';

}
