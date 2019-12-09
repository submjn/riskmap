import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../../../api/options/options.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-options-page',
  templateUrl: './options-page.component.html',
})
export class OptionsPageComponent implements OnInit {

  total$: Observable < number > ;

  constructor(private options: OptionsService) { }

  ngOnInit() {
    this.total$ = this.options.totalOptions$;
  }

}
