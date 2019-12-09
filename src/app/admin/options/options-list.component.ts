import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Option } from '../../../models/Option';
import { OptionsService } from '../../../api/options/options.service';

@Component({
  selector: 'ngx-options-list',
  templateUrl: './options-list.component.html',
})
export class OptionsListComponent implements OnInit {

  loading$: Observable<boolean>;
  options$: Observable<Option[]>;
    noResults$: Observable<boolean>;

    constructor(
        private options: OptionsService,
    ) {}

    ngOnInit() {
        this.loading$ = this.options.loading$;
        this.noResults$ = this.options.noResults$;
        this.options$ = this.options.options$;
    }

    delete(option: Option) {
        this.options.delete(option.id);
    }

}
